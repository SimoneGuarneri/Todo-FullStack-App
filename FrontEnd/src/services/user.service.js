import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:8080/toDoList/api/",
	headers: {},
	data: {}
});

export function loginService(e) {
	e.preventDefault();

	const data = {
		id: null,
		username: e.target[0].value || " ",
		email: null,
		password: e.target[1].value || " ",
	};

	
	let check = testDatas(data);
	console.log(check);
	return check == "valid" ? instance.post("/login", data) : check;
}

export function registerService(e) {
	e.preventDefault();

	const data = {
		id: null,
		email: e.target[0].value || " ",
		username: e.target[1].value || " ",
		password: e.target[2].value || " ",
	};

	let check = testDatas(data);
	return check == "valid" ? instance.post("/register", data) : check;
}


function testDatas(data){

	if(data.email){
		if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(data.email)) {
			return new Promise((resolve, reject) => {
				resolve({
					data: {
						code: 400,
						message: "Email non valida"
					}
				});
			});
		}
	}

	if(data.username){
		if(!/^[a-zA-Z0-9._%+-]{5,30}$/.test(data.username)){
			return new Promise((resolve, reject) => {
				resolve({
					data: {
						code: 400,
						message: "Username non valido"
					}
				});
			});
		}	
	}

	if(data.password){
		if(data.password.length < 4){
			return new Promise((resolve, reject) => {
				resolve({
					data: {
						code: 400,
						message: "Password non valida"
					}
				});
			});
		}
	}

	return "valid";
}