import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setState } from "../features/UserSlice.js";
import {
	getAllTodos,
	updateTodos,
	modifyTodos,
} from "../features/TodoSlice.js";
import {
	insertTodo,
	getAll,
	removeTodo,
	modifyTodo,
} from "../services/todos.service.js";

export default function HomeUtente() {
	const dispatch = useDispatch();
	const username = useSelector((state) => state.user.username);
	const id = useSelector((state) => state.user.id);
	const content = useSelector((state) => state.todo.content);

	function update(newTodo) {
		dispatch(updateTodos(newTodo));
	}

	function load() {
		getAll(username)
			.then((res) => {
				dispatch(getAllTodos(res.data));
			})
			.catch((err) => {
				console.log(err);
			});
	}

	function insert(e) {
		insertTodo(e, id)
			.then((res) => {
				update(res.data);
				e.target.reset(); //FORM RESET
			})
			.catch((err) => {
				console.log(err);
			});
	}

	function remove(e) {
		removeTodo(e)
			.then(() => {
				load(); //TODO: Fix this is slow
			})
			.catch((err) => {
				console.log(err);
			});
	}

	function modify(e) {
		modifyTodo(e, content)
			.then((res) => {
				dispatch(modifyTodos(res.data));
			})
			.catch((err) => {
				console.log(err);
			});
	}

	useEffect(() => {
		load(username);
	}, []);

	return (
		<div className="columns">
			<div className="column is-4-desktop is-1-mobile"></div>
			<div className="column is-4-desktop is-10-mobile">
				<p className="loggedText is-size-5-mobile">Hi {username}</p>
				<p className="loggedIcon is-size-3-mobile">📚TODOS</p>
				<div className="todos">
					{content
						? content.map((item) => {
								return (
									<div className="todosList">
										<button
											itemId={item.id}
											className="itemFatto is-size-4-desktop is-size-5-mobile"
											onClick={(e) => modify(e)}
										>
											{item.fatto ? "✔️" : "📌"}
										</button>
										<button
											className="itemElimina itemFatto is-size-4-desktop is-size-5-mobile"
											itemId={item.id}
											onClick={remove}
										>
											❌
										</button>
										<li
											className="itemTitolo is-size-2-desktop is-size-3-mobile"
											key={item.titolo}
										>
											{item.titolo}
										</li>
										<li
											className="itemContenuto itemTitolo is-size-4-desktop is-size-6-mobile"
											key={item.contenuto}
										>
											{item.contenuto}
										</li>

										
									</div>
								);
						  })
						: ""}
				</div>
				<form className="todoInput" onSubmit={insert}>
					<input
						type="text"
						name="titolo"
						className="inputTitolo formInput is-size-3-desktop is-size-4-mobile"
						placeholder="Title"
						autoComplete="off"
					/>
					<input
						type="text"
						name="contenuto"
						className="inputContenuto formInput is-size-3-desktop is-size-4-mobile"
						placeholder="Content"
						autoComplete="off"
					/>
					<button className="Button inputButton is-size-4-desktop is-size-6-mobile" type="submit">
						ADD
					</button>
				</form>
			</div>

			<div className="column is-4-desktop is-1-mobile">
				<button
					className="Button logOut is-size-6-desktop is-size-7-mobile"
					onClick={() => {
						dispatch(
							setState({ code: null, message: "", logged: false })
						);
						localStorage.setItem("user", `-1 null`);
					}}
				>
					LOGOUT
				</button>
			</div>
		</div>
	);
}
