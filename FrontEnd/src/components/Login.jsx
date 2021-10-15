import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setState } from "../features/UserSlice.js";
import { setError, resetError } from "../features/ErrorSlice.js";
import { loginService } from "../services/user.service.js";

export default function Login() {
	const dispatch = useDispatch();
	const error = useSelector((state) => state.error);
	const state = useSelector((state) => state.user);

	useEffect(() => {
		dispatch(resetError());
	}, []);

	function tryLogin(e) {
		loginService(e)
			.then((res) => {
				if (!isNaN(res.data.id)) {
					dispatch(
						setState({
							id: res.data.id,
							username: res.data.username,
							logged: res.data.logged,
						})
					);
					dispatch(resetError());
					localStorage.setItem(
						"user",
						`${res.data.id} ${res.data.username}`
					);
				} else
					dispatch(
						setError({
							code: res.data.code,
							message: res.data.message,
						})
					);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<div className="columns is-mobile">
			<div className="column is-4-desktop is-1-mobile"></div>
			<div className="column is-4-desktop is-10-mobile">
			<div className="centerRect">
				<p className="loginIcon">
					{error.code === 200 || error.code == null ? "🤨" : "👀"}
				</p>
				<form onSubmit={tryLogin}>
					<input
						type="text"
						name="username"
						className="formInput inputUsername is-size-3-desktop is-size-4-mobile"
						placeholder="USERNAME"
						autoComplete="off"
					/>

					<input
						type="password"
						name="password"
						className="formInput inputPassword is-size-3-desktop is-size-4-mobile"
						placeholder="PASSWORD"
						autoComplete="off"
					/>

					<button className="Button submitButton is-size-3-desktop is-size-4-mobile" type="submit">
						LOGIN
					</button>
				</form>
				<Link to="/register" className="orRegister is-size-5-desktop is-size-7-mobile">
					OR REGISTER
				</Link>

				<p className="error is-size-6-desktop is-size-7-mobile">
					{state.logged ? (
						<Redirect push to="/home" />
					) : (
						error.message
					)}
				</p>
				</div>
			</div>
			<div className="column column is-4-desktop is-1-mobile"></div>
		</div>
	);
}
