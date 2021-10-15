package it.simoneguarneri.toDoList.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.simoneguarneri.toDoList.model.Utente;
import it.simoneguarneri.toDoList.service.UtenteService;

@RestController
@RequestMapping("/toDoList/api")
public class UtenteController {
	
	@Autowired
	private UtenteService utenteService;

	private final String HOST = "http://localhost:3000";
	
	
	@CrossOrigin(origins = HOST)
	@PostMapping("/login")
	private ResponseEntity<?> loginRequest(@RequestBody Utente utente, HttpServletRequest httpServletRequest){
		return ResponseEntity.ok(utenteService.loginRequest(utente));
	}
	
	@CrossOrigin(origins = HOST)
	@PostMapping("/register")
	private ResponseEntity<?> registerRequest(@RequestBody Utente utente, HttpServletRequest httpServletRequest){
		return ResponseEntity.ok(utenteService.registerRequest(utente));
	}
}
