import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [inputEmail, setInputEmail] = useState("");
	const [inputPassword, setInputPassword] = useState("");
	const [signupNavigate, setSignupNavigate] = useState(false);
	const [loginNavigate, setLoginNavigate] = useState(false);
	const [privateNavigate, setPrivateNavigate] = useState(false);

	if (signupNavigate) {
		return <Navigate to="/signup" />
	  }

	if (loginNavigate) {
		return <Navigate to="/login" />
	  }

	if (privateNavigate) {
		return <Navigate to="/private" />
	  }


	return (
		<div className="text-center mt-5">
			<div className="container border border-secondary d-flex justify-content-end">
				<button className="btn btn-primary m-2" onClick={() => setSignupNavigate(true)}>Sign Up</button>
				<button className="btn btn-primary m-2" onClick={() => setLoginNavigate(true)}>Login</button>
				<button className="btn btn-danger m-2" onClick={() => setPrivateNavigate(true)}>Private</button>
				<button className="btn btn-danger m-2" onClick={() => console.log(actions.logout())} >Logout</button>
			</div>
			
			<div className="container border border-secondary">
				<h2>Home Page</h2>
				<p>Some information about the website suitable for the homepage. Welcome text or information about the product for new users.</p>
			</div>

		</div>
	);
};
