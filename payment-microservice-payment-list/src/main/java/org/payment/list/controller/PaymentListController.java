package org.payment.list.controller;

import java.util.List;

import org.payment.list.dto.PaymentDetails;
import org.payment.list.repository.PaymentListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@ControllerAdvice
@RestController
@RequestMapping(value="/pament-list")
public class PaymentListController {
	@Autowired
	PaymentListRepository repository;
	
	@GetMapping(value="/list")
	public List<PaymentDetails> getData(){

		return repository.getPaymentList();
	}

}
