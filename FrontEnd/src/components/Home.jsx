import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { setState } from "../features/UserSlice.js";

import HomeUtente from "./HomeUtente.jsx";

const randomEmoji =
	`😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋
	 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🤩 🥳 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫
	 😩 🥺 😢 😭 😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😓 🤗 🤔 🤭 🤫
	 🤥 😶 😐 😑 😬 🙄 😯 😦 😧 😮 😲 🥱 😴 🤤 😪 😵 🤐 🥴 🤢 🤮 🤧
	 😷 🤒 🤕 🤑 🤠 😈 👿 👹 👺 🤡 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 
	 😻 😼 😽 🙀 😿 😾`.split(" ");

function HomeOspite() {
	const [hi, setHi] = useState("👾");

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
