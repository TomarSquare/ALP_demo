package org.payment.list.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class PaymentDetails {
	@Id
	private Long id;

	@Column(name = "debit_account")
	private Long debitAccount;
	
	@Column(name = "credit_account")
	private Long creditAccount;
	
	@Column(name = "execution_date")
	private Long executionDate;

	@Column(name = "reason")
	private String reason;

	public PaymentDetails() {

	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getDebitAccount() {
		return debitAccount;
	}

	public void setDebitAccount(Long debitAccount) {
		this.debitAccount = debitAccount;
	}

	public Long getCreditAccount() {
		return creditAccount;
	}

	public void setCreditAccount(Long creditAccount) {
		this.creditAccount = creditAccount;
	}

	public Long getExecutionDate() {
		return executionDate;
	}

	public void setExecutionDate(Long executionDate) {
		this.executionDate = executionDate;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	@Override
	public String toString() {
		return "PaymentDetails [id=" + id + ", debitAccount=" + debitAccount + ", creditAccount=" + creditAccount
				+ ", executionDate=" + executionDate + ", reason=" + reason + "]";
	}
	
}
