package it.simoneguarneri.toDoList.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Response {
	
	private Integer id;
	private String username;
	private boolean logged;
}
