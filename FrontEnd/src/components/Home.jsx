import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { setState } from "../features/UserSlice.js";

import HomeUtente from "./HomeUtente.jsx";

const randomEmoji =
	`๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐คฃ ๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐ฅฐ ๐ ๐ ๐ ๐ ๐
	 ๐ ๐ ๐ ๐คช ๐คจ ๐ง ๐ค ๐ ๐คฉ ๐ฅณ ๐ ๐ ๐ ๐ ๐ ๐ ๐ โน๏ธ ๐ฃ ๐ ๐ซ
	 ๐ฉ ๐ฅบ ๐ข ๐ญ ๐ค ๐  ๐ก ๐คฌ ๐คฏ ๐ณ ๐ฅต ๐ฅถ ๐ฑ ๐จ ๐ฐ ๐ฅ ๐ ๐ค ๐ค ๐คญ ๐คซ
	 ๐คฅ ๐ถ ๐ ๐ ๐ฌ ๐ ๐ฏ ๐ฆ ๐ง ๐ฎ ๐ฒ ๐ฅฑ ๐ด ๐คค ๐ช ๐ต ๐ค ๐ฅด ๐คข ๐คฎ ๐คง
	 ๐ท ๐ค ๐ค ๐ค ๐ค  ๐ ๐ฟ ๐น ๐บ ๐คก ๐ฉ ๐ป ๐ โ ๏ธ ๐ฝ ๐พ ๐ค ๐ ๐บ ๐ธ ๐น 
	 ๐ป ๐ผ ๐ฝ ๐ ๐ฟ ๐พ`.split(" ");

function HomeOspite() {
	const [hi, setHi] = useState("๐พ");

	return (
		<div className="columns is-mobile">
			<div className="column is-5-desktop is-1-mobile"></div>
			<div className="column is-2-desktop is-10-mobile">
				<div className="centerRect">
				<button
					className="NotLoggedIcon"
					onClick={() => {
						setHi(
							randomEmoji[
								Math.floor(Math.random() * randomEmoji.length)
							]
						);
					}}
				>
					<p>{hi}</p>
				</button>
				<Link to="/login" className="Button loginButton is-size-3-desktop is-size-5-mobile">
					LOGIN
				</Link>
				<Link to="/register" className="Button registerButton is-size-3-desktop is-size-5-mobile">
					REGISTER
				</Link>
				</div>
			</div>
			<div className="column is-5-desktop is-1-mobile"></div>
		</div>
	);
}

export default function Home() {
	
	const dispatch = useDispatch();
	const user = localStorage.getItem("user");
	const currentState = user ? user.split(" ") : [-1, ""];

	if(currentState[0] != -1 && currentState[1] != "")
		dispatch(setState({id: currentState[0], username: currentState[1], logged: true}));

	return useSelector((state) => state.user.logged) ? (
		<HomeUtente />
	) : (
		<HomeOspite />
	);

	//SAME AS

	// const logged = useSelector((state) => state.user.logged);

	// if (logged) return <HomeUtente />;
	// else return <HomeOspite />;
}
