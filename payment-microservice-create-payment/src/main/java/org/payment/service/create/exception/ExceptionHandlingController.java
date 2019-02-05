package org.payment.service.create.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ExceptionHandlingController {
	
	@ExceptionHandler(InvalidDataException.class)
	public ResponseEntity<ExceptionResponse> invalidData(InvalidDataException exc){
		ExceptionResponse response = new ExceptionResponse();
        response.setErrorCode("Invalid Data");
        response.setErrorMessage(exc.getMessage());
 
        return new ResponseEntity<ExceptionResponse>(response, HttpStatus.BAD_REQUEST);
	}
}
