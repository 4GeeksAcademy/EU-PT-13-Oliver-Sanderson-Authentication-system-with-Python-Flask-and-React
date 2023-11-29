import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [inputEmail, setInputEmail] = useState("");
	const [inputPassword, setInputPassword] = useState("");

	const [homeNavigate, setHomeNavigate] = useState(false);
	const [privateNavigate, setPrivateNavigate] = useState(false);

	if (homeNavigate) {
		return <Navigate to="/" />
	  }

	if (privateNavigate) {
		return <Navigate to="/private" />
	  }

	return (
		<div className="text-center mt-5">
			<div className="container border border-secondary">
				<div className="d-flex d-flex justify-content-start">
					<button className="btn btn-danger m-2" onClick={() => setHomeNavigate(true)} >Home</button>
				</div>
				<h2>Login</h2>
				<div className="row">
					<label className="col-5" for="inputEmail">Email</label>
					<label className="col-5" for="inputPassword">Password</label>
				</div>
				<div className="row">
					<input className="col-5" id="inputEmail" onChange={event => setInputEmail(event.target.value)}/>
					<input className="col-5" id="inputPassword" onChange={event => setInputPassword(event.target.value)} type="password"/>
					<button className="btn btn-primary col-2" onClick={() => {console.log(actions.login(inputEmail, inputPassword)); setPrivateNavigate(true)}} >Login</button>
				</div>
				
			</div>

		</div>
	);
};
