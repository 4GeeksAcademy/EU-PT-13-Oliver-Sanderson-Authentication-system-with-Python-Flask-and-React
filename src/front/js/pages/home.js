import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [inputEmail, setInputEmail] = useState("");
	const [inputPassword, setInputPassword] = useState("");
	const [signUpEmail, setSignUpEmail] = useState("");
	const [signUpPassword, setSignUpPassword] = useState("");

	return (
		<div className="text-center mt-5">
			<div className="container border border-secondary">
				<h2>Sign Up</h2>
				<div className="row">
					<label className="col-5" for="signUpEmail">Email</label>
					<label className="col-5" for="signUpPassword">Password</label>
				</div>
				<div className="row">
					<input className="col-5" id="signUpEmail" onChange={event => setSignUpEmail(event.target.value)}/>
					<input className="col-5" id="signUpPassword" onChange={event => setSignUpPassword(event.target.value)} type="password"/>
					<button className="btn btn-primary col-2" onClick={() => actions.signUp(signUpEmail, signUpPassword)} >Sign Up</button>
				</div>
			</div>

			<div className="container border border-secondary">
				<h2>Login</h2>
				<div className="row">
					<label className="col-5" for="inputEmail">Email</label>
					<label className="col-5" for="inputPassword">Password</label>
				</div>
				<div className="row">
					<input className="col-5" id="inputEmail" onChange={event => setInputEmail(event.target.value)}/>
					<input className="col-5" id="inputPassword" onChange={event => setInputPassword(event.target.value)} type="password"/>
					<button className="btn btn-primary col-2" onClick={() => console.log(actions.login(inputEmail, inputPassword))} >Login</button>
				</div>
			</div>
			
			<div className="container border border-secondary">
				<h2>Private info</h2>
				<button className="btn btn-primary" onClick={() => actions.unlock()} >Show secret message</button>
			</div>

			{/* <h2>Private info</h2>
			<label id="priateId">Private...</label>
			<button onClick={() => actions.unlock()} >Unlock</button>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div> */}
			{/* <p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://start.4geeksacademy.com/starters/react-flask">
					Read documentation
				</a>
			</p> */}
		</div>
	);
};
