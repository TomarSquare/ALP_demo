package org.payment.service.create.controller;

import org.payment.service.create.dto.CreatePaymentModel;
import org.payment.service.create.repository.CreatePaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sun.media.sound.InvalidDataException;

@ControllerAdvice
@RestController
public class CreatePaymentApiRest {
	
	@Autowired
	CreatePaymentRepository repository;
	
	@RequestMapping(value="/api", consumes="application/json",method=RequestMethod.POST)
	public CreatePaymentModel insertData(@RequestBody CreatePaymentModel model) throws InvalidDataException{
		if(model.getPaymentId()==0){
			throw new InvalidDataException("Payment id is invalid");
		}		
		return repository.save(model);
	}

}
