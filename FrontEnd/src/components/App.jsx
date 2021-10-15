import React from "react";

import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux"

import Login from "./Login.jsx";
import Register from "./Register.jsx";
import NotFound from "./NotFound.jsx";
import Home from "./Home.jsx"

import { setState } from '../features/UserSlice.js'

export default function App() {
	
	const dispatch = useDispatch();
	dispatch(setState({code: null, message: "", username: "", logged: false}));

	return (
		<div>

			<Switch>
				<Route exact path="/">
					<Home/>
				</Route>

				<Route exact path="/home">
					<Home/>
				</Route>

				<Route exact path="/register">
					<Register  />
				</Route>

				<Route exact path="/login">
					<Login />
				</Route>

        		<Route path="/*">
					<NotFound/>
				</Route>
			</Switch>
		</div>
	);
}
