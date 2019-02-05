package org.payment.service.create.repository;

import org.payment.service.create.dto.CreatePaymentModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CreatePaymentRepository extends JpaRepository<CreatePaymentModel, Integer> {
	CreatePaymentModel save(CreatePaymentModel model);
}
