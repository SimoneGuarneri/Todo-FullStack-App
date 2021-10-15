package it.simoneguarneri.toDoList.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.simoneguarneri.toDoList.model.Todo;
import it.simoneguarneri.toDoList.service.TodoService;

@RestController
@RequestMapping("/toDoList/api")
public class TodoController {
	
	@Autowired
	private TodoService todoService;
	private final String HOST = "http://localhost:3000";
	
	@CrossOrigin(origins = HOST)
	@PostMapping("/getAllTodos/{username}")
	private ResponseEntity<?> loginRequest(@PathVariable String username, HttpServletRequest httpServletRequest){
		return ResponseEntity.ok(todoService.getAllTodos(username));
	}
	
	@CrossOrigin(origins = HOST)
	@PostMapping("/addTodo")
	private ResponseEntity<?> addTodo(@RequestBody Todo todo, HttpServletRequest httpServletRequest){
		return ResponseEntity.ok(todoService.addTodo(todo));
	}
	
	@CrossOrigin(origins = HOST)
	@PostMapping("/removeTodo/{id}")
	private void removeTodo(@PathVariable Integer id, HttpServletRequest httpServletRequest){
		todoService.removeTodo(id);
	}
	
	@CrossOrigin(origins = HOST)
	@PostMapping("/modifyTodo")
	private ResponseEntity<?> changeTodoState(@RequestBody Todo todo, HttpServletRequest httpServletRequest){
		return ResponseEntity.ok(todoService.modifyTodo(todo));
	}
}