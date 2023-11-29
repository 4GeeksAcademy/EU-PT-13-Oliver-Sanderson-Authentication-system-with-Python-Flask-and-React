import React, { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Private = () => {
	const { store, actions } = useContext(Context);

	const [homeNavigate, setHomeNavigate] = useState(false);


	if(!store.token) {
		alert("Please login to view this page")
		return <Navigate to="/login" />
	}
	

	if (homeNavigate) {
		return <Navigate to="/" />
	  }

	return (
		<div className="text-center mt-5">
			<div className="container border border-secondary">
				<div className="d-flex d-flex justify-content-start">
					<button className="btn btn-danger m-2" onClick={() => setHomeNavigate(true)} >Home</button>
					<button className="btn btn-danger col-1 m-2" onClick={() => {actions.logout(); setHomeNavigate(true)}} >Logout</button>
				</div>
				<h2>Private</h2>
				<p>Users personal data</p>
				<button className="btn btn-primary" onClick={() => actions.unlock()} >Show secret message</button>

				
			</div>

		</div>
	);
};
