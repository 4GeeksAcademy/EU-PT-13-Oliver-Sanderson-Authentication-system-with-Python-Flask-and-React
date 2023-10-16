import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [inputEmail, setInputEmail] = useState("");
	const [inputPassword, setInputPassword] = useState("");
	const [signUpEmail, setSignUpEmail] = useState("");
	const [signUpPassword, setSignUpPassword] = useState("");

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
			<h2>Sign Up</h2>
			<label for="signUpEmail">Email</label>
			<input id="signUpEmail" onChange={event => setSignUpEmail(event.target.value)}/>
			<label for="signUpPassword">Password</label>
			<input id="signUpPassword" onChange={event => setSignUpPassword(event.target.value)} type="password"/>
			<button onClick={() => actions.signUp(signUpEmail, signUpPassword)} >Sign Up</button>
			<h2>Login</h2>
			<label for="email">Email</label>
			<input id="email" onChange={event => setInputEmail(event.target.value)}/>
			<label for="password">Password</label>
			<input id="password" onChange={event => setInputPassword(event.target.value)} type="password"/>
			<button onClick={() => actions.login(inputEmail, inputPassword)} >Login</button>
			<button onClick={() => actions.test()} >TEST</button>
			<h2>Private info</h2>
			<label id="priateId">Private...</label>
			<button onClick={() => actions.unlock()} >Unlock</button>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://start.4geeksacademy.com/starters/react-flask">
					Read documentation
				</a>
			</p>
		</div>
	);
};
