import { CreditAcService } from './../credit-ac.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-payment',
  templateUrl: './create-payment.component.html',
  styleUrls: ['./create-payment.component.css']
})
export class CreatePaymentComponent implements OnInit {

  private debitAcs: string ;//[];
  payment = {};

  constructor(private  creditAcService:  CreditAcService) { }

  ngOnInit() {
    this.getDebitAc();
  }

  public  getDebitAc(){
    console.log("method called")
    this.creditAcService.getDebitAc().subscribe(
      response => {
        this.debitAcs = response as string;//[];	 // FILL THE ARRAY WITH DATA.
        console.log(this.debitAcs);//[0]);
        console.log("printing data");
        console.log(response.title);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

  }

  public createPayment(){
    console.log(this.payment);
  }
}