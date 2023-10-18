const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			token: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			login: (email, password) => {
					fetch(process.env.BACKEND_URL + "/api/token", {
						method: "POST",
						headers: {"Content-Type": "application/json"},
						body: JSON.stringify({email: email, password: password}),
					})
					.then((recieved) => recieved.json())
					.then((data) => {
						if (data.message){
							alert(data.message)
						} else {
							alert("Logged in")
						}
						console.log(data); 
						localStorage.setItem("token", data.access_token);
						setStore({ token: data.access_token })
					})
					.catch((error) => console.log(error))
			},
			logout: () => {
				setStore({ token: "" })
				alert("Logged out.")
			},
			signUp: (email, password) => {
				fetch(process.env.BACKEND_URL + "/api/sign_up", {
					method: "POST",
					headers: {"Content-Type": "application/json"},
					body: JSON.stringify({email: email, password: password}),
				})
				.then((recieved) => recieved.json())
				.then((data) => {console.log(data)})
				.catch((error) => console.log(error))
		},
		unlock: () => {
			console.log("UNLOCK RAN")
			const store = getStore();
			fetch(process.env.BACKEND_URL + "/api/me", {
				method: "GET",
				headers: {"Authorization": "Bearer " + store.token}
			})
			.then((recieved) => recieved.json())
			.then((data) => {
				if (data["secret"]){
					alert("The secret message is: " + data["secret"])
				} else {
					alert("You are not authorised to view the secret message!")
				}
				return data
			})
			.catch((error) => console.log(error))
		},

		}
	};
};

export default getState;
