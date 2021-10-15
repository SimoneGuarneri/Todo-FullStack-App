import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:8080/toDoList/api/",
	headers: {},
	data: {}
});


export function insertTodo(e, id_ut) {
	e.preventDefault();
    
	const data = {
        id: null,
        titolo: e.target[0].value,
		contenuto: e.target[1].value,
        fatto: 0,
        id_utente: id_ut
	};

	if (data.titolo != "" && data.contenuto != "") 
        return instance.post("/addTodo", data);
}

export function getAll(username){
    return instance.post("/getAllTodos/" + username);
}

export function removeTodo(e){
    const idToRemove = e.target.getAttribute("itemId");
    return instance.post("/removeTodo/" + idToRemove);
}

export function modifyTodo(event, content){

    const idToChange = event.target.getAttribute("itemId");
    const newTodo = content.find((e) => e.id == idToChange);

    const data = {
        id: newTodo.id,
        titolo: newTodo.titolo,
		contenuto: newTodo.contenuto,
        fatto: !newTodo.fatto,
        id_utente: newTodo.id_utente
    }

    return instance.post("/modifyTodo", data);
}