import React, {useEffect} from "react";
import { Link, Redirect } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setState } from "../features/UserSlice.js";
import { setError, resetError } from "../features/ErrorSlice.js";
import { registerService } from "../services/user.service.js";

export default function Register() {
	const dispatch = useDispatch();
	const error = useSelector((state) => state.error);
	const state = useSelector((state) => state.user);

	useEffect(() => {
		dispatch(resetError());
	}, []);

	function tryRegister(e) {
		dispatch(resetError());

		registerService(e)
			.then((res) => {
				if (!isNaN(res.data.id)) {
					dispatch(
						setState({
							id: res.data.id,
							username: res.data.username,
							logged: res.data.logged,
						})
					);
				} else {
					dispatch(
						setError({
							code: res.data.code,
							message: res.data.message,
						})
					);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<div className="columns is-moble">
			<div className="column is-4-desktop is-1-mobile"></div>
			<div className="column is-4-desktop is-10-mobile">
				<div className="centerRect">
					<p className="loginIcon">
						{error.code == null ? "😃" : "🙄"}
					</p>
					<form onSubmit={tryRegister}>
						<input
							type="text"
							name="email"
							className="formInput inputEmail is-size-3-desktop is-size-4-mobile"
							placeholder="EMAIL"
							autoComplete="off"
						/>

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

						<button
							className="Button submitButton is-size-3-desktop is-size-5-mobile"
							type="submit"
						>
							REGISTER
						</button>
					</form>

					<Link
						to="/login"
						className="orRegister is-size-5-desktop is-size-7-mobile"
					>
						OR LOG IN
					</Link>

					<p className="error">
						{/* state.id === 0 significa che l'utente è stato correttamente registrato, di default il valore è -1, 0 è un valore usato come codice interno per comunicare l effettuata registrazione */}
						{state.id === 0 ? (
							<Redirect push to="/login" />
						) : (
							error.message
						)}
					</p>
				</div>
			</div>
			<div className="column is-4-desktop is-1-mobile"></div>
		</div>
	);
}
