package com.in28minutes.springboot.microservice.example.forex;

import org.springframework.data.jpa.repository.JpaRepository;

import com.in28minutes.springboot.microservice.example.dto.ExchangeValue;

public interface ExchangeValueRepository extends JpaRepository<ExchangeValue, Long> {
	ExchangeValue findByFromAndTo(String from, String to);
}
