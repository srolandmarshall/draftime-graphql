import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./logo.svg";
import { API, Storage } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>DRAFTime</h1>
			</header>
		</div>
	);
}

export default withAuthenticator(App);
