package it.simoneguarneri.toDoList.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.simoneguarneri.toDoList.model.Response;
import it.simoneguarneri.toDoList.model.Error;
import it.simoneguarneri.toDoList.model.Utente;
import it.simoneguarneri.toDoList.repository.UtenteRepository;

@Service
public class UtenteService {
	
	@Autowired
	private UtenteRepository utenteRepository;
	
	public Object loginRequest(Utente utente){
		
		Utente trovato = utenteRepository.loginRequest(utente.getUsername(), utente.getPassword());
		
		if(trovato == null) {
			if(utenteRepository.checkIfExistsUsername(utente.getUsername()).size() > 0)
				return new Error(404, "Password Errata");
			else
				return new Error(40, "Utente non trovato");
		}
		
		else
			return new Response(trovato.getId(), trovato.getUsername(), true);
	}
	
	public Object registerRequest(Utente utente){
		
		if(utenteRepository.checkIfExistsEmail(utente.getEmail()).size() > 0)
			 return new Error(500, "Email già in uso");
		
		else if(utenteRepository.checkIfExistsUsername(utente.getUsername()).size() > 0) 
			 return new Error(500, "Username già in uso");
		
		else {
			utenteRepository.save(utente);
			return new Response(0, "", false);
		}
	}
	
	
}
