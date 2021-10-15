package it.simoneguarneri.toDoList.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Error {
	
	private int code;
	private String message;

}
