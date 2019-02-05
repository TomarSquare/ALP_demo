package org.payment.service.create.dto;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name="Payment_List")
public class CreatePaymentModel {
	@Id
	int paymentId;
	int crId;
	int drId;
	String reasonForPayment;
	int amount;
	Date executionDt;
	boolean debitInvoice;
	
	public int getPaymentId() {
		return paymentId;
	}
	public void setPaymentId(int paymentId) {
		this.paymentId = paymentId;
	}
	public int getCrId() {
		return crId;
	}
	public void setCrId(int crId) {
		this.crId = crId;
	}
	public int getDrId() {
		return drId;
	}
	public void setDrId(int drId) {
		this.drId = drId;
	}
	public String getReasonForPayment() {
		return reasonForPayment;
	}
	public void setReasonForPayment(String reasonForPayment) {
		this.reasonForPayment = reasonForPayment;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public Date getExecutionDt() {
		return executionDt;
	}
	public void setExecutionDt(Date executionDt) {
		this.executionDt = executionDt;
	}
	public boolean isDebitInvoice() {
		return debitInvoice;
	}
	public void setDebitInvoice(boolean debitInvoice) {
		this.debitInvoice = debitInvoice;
	}
	@Override
	public String toString() {
		return "CreatePaymentModel [paymentId=" + paymentId + ", crId=" + crId + ", drId=" + drId
				+ ", reasonForPayment=" + reasonForPayment + ", amount=" + amount + ", executionDt=" + executionDt
				+ ", debitInvoice=" + debitInvoice + "]";
	}
	
}
