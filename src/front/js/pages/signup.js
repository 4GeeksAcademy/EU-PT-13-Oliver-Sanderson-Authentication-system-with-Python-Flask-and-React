import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const SignUp = () => {
	const { store, actions } = useContext(Context);
	const [signUpEmail, setSignUpEmail] = useState("");
	const [signUpPassword, setSignUpPassword] = useState("");
	const [alertMessage, setAlertMessage] = useState("");
	const [type, setType] = useState("danger")

	const [homeNavigate, setHomeNavigate] = useState(false);

	let alertBoxItem = document.getElementById("alertBox")

	async function signupClicked() {
		if(await actions.signUp2(signUpEmail, signUpPassword)) {
			alertBoxItem.hidden = false
			setType("success")
			setAlertMessage("User created!")
		} else {
			alertBoxItem.hidden = false
			setType("danger")
			setAlertMessage("Problem with signup!")
		}
		setSignUpEmail("")
		setSignUpPassword("")
	}



	if (homeNavigate) {
		return <Navigate to="/" />
	  }


	return (
		<div className="text-center mt-5">

			
			<div className="container border border-secondary">
				<div className="d-flex d-flex justify-content-start">
					<button className="btn btn-danger m-2" onClick={() => setHomeNavigate(true)} >Home</button>
				</div>
				<h2>Sign Up</h2>
				<div className="row">
					<label className="col-5" for="signUpEmail">Email</label>
					<label className="col-5" for="signUpPassword">Password</label>
				</div>
				<div className="row">
					<input className="col-5" id="signUpEmail" onChange={event => setSignUpEmail(event.target.value)} value={signUpEmail}/>
					<input className="col-5" id="signUpPassword" onChange={event => setSignUpPassword(event.target.value)} value={signUpPassword} type="password"/>
					<button className="btn btn-primary col-2" onClick={() => signupClicked() } >Sign Up</button>
				</div>
				<div className="row">
					<div className="d-flex justify-content-center">
						<div id="alertBox" class={`col-5 alert alert-${type}`} role="alert" hidden={true}>{alertMessage}</div>
					</div>
				</div>
			</div>

		</div>
	);
};
