package it.simoneguarneri.toDoList.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import it.simoneguarneri.toDoList.model.Todo;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Integer>{
	
	@Query(value="SELECT todo.* FROM utente INNER JOIN todo ON utente.id = todo.id_utente WHERE utente.username = :username",  nativeQuery = true)
	public List<Todo> findAllTodos(@Param("username") String username);

}