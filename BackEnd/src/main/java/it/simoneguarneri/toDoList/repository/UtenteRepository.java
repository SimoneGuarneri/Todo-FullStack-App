package it.simoneguarneri.toDoList.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import it.simoneguarneri.toDoList.model.Utente;

@Repository
public interface UtenteRepository extends JpaRepository<Utente, Integer>{
	
	@Query(value="SELECT * FROM utente WHERE utente.username = :username AND utente.password = :password",  nativeQuery = true)
	public Utente loginRequest(@Param("username") String username,
									@Param("password") String password);

	@Query(value="SELECT * FROM utente WHERE username = :value",  nativeQuery = true)
	public List<Utente> checkIfExistsUsername(@Param("value") String value);
	
	@Query(value="SELECT * FROM utente WHERE email = :value",  nativeQuery = true)
	public List<Utente> checkIfExistsEmail(@Param("value") String value);
}