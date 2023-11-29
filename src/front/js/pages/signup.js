import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const SignUp = () => {
	const { store, actions } = useContext(Context);
	const [signUpEmail, setSignUpEmail] = useState("");
	const [signUpPassword, setSignUpPassword] = useState("");

	const [homeNavigate, setHomeNavigate] = useState(false);

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
					<input className="col-5" id="signUpEmail" onChange={event => setSignUpEmail(event.target.value)}/>
					<input className="col-5" id="signUpPassword" onChange={event => setSignUpPassword(event.target.value)} type="password"/>
					<button className="btn btn-primary col-2" onClick={() => actions.signUp(signUpEmail, signUpPassword)} >Sign Up</button>
				</div>
			</div>

		</div>
	);
};
