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
  reason: string;
  setp1Tab: boolean = false;
  setp2Tab: boolean = true;
  step3Tab: boolean = true;
  selectedTab = 0;

  constructor(private  creditAcService:  CreditAcService) {  }

  ngOnInit() {
    this.getDebitAc();
  }

  public  getDebitAc(){
    console.log("method called")
    this.creditAcService.getDebitAc().subscribe(
      response => {
        //this.debitAcs = response as string;//[];	 // FILL THE ARRAY WITH DATA.
        //console.log(this.debitAcs);//[0]);
        console.log("printing data");
        console.log(response.title);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

  }

  public createPayment(t){
    console.log("hello");
    this.setp1Tab=true;
    this.setp2Tab=false;
    this.step3Tab=false;
  }
}