import { PaymentList } from './../payment-list.service';
import { CreditAcService } from './../credit-ac.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-payment',
  templateUrl: './create-payment.component.html',
  styleUrls: ['./create-payment.component.css']
})
export class CreatePaymentComponent implements OnInit {

  private debitAcs: string;//[];
  private creditAcs: string;//[];
  payment = {};
  setp1Tab: boolean = false;
  setp2Tab: boolean = true;
  step3Tab: boolean = true;
  selectedTab = 0;
  creditAccount = new FormControl('');
  debitAccount = new FormControl('');
  reason = new FormControl('');
  amount = new FormControl('');
  currency = new FormControl('');
  executionDate = new FormControl('');
  createForm = new FormGroup({
    creditAccount: new FormControl(''),
    debitAccount: new FormControl(''),
    reason: new FormControl(''),
    amount: new FormControl(''),
    currency: new FormControl(''),
    executionDate: new FormControl('')
  });

  constructor(private  creditAcService:  CreditAcService, private paymentListService: PaymentList, private parserFormatter: NgbDateParserFormatter) {  }

  ngOnInit() {
    this.getDebitAc();
    this.getCreditAc();
  }

  public  getDebitAc(){
    console.log("getDebitAc method called")
    this.creditAcService.getDebitAc().subscribe(
      response => {
        this.debitAcs = response as string;//[];	 // FILL THE ARRAY WITH DATA.
        console.log(this.debitAcs[0]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

  }

  public getCreditAc(){
    console.log("getCreditAc method called")
    this.creditAcService.getCreditAc().subscribe(
      response => {
        this.creditAcs = response as string;//[];	 // FILL THE ARRAY WITH DATA.
        console.log(this.creditAcs[0]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

  public createPayment(t){
    console.log("debitAccount",this.debitAccount);
    console.log("executionDate",this.executionDate);
    this.setp1Tab=true;
    this.setp2Tab=false;
    this.step3Tab=false;
    console.log("",JSON.stringify(this.debitAccount));
  }

  public postData(post){
    console.log('post::',post);
    this.creditAccount  = post.creditAccount;
    this.debitAccount = post.debitAccount;
    this.reason    = post.reason;
    this.amount     = post.amount;
    this.currency = post.currency;
    //var dateAsstring = this.parserFormatter.format(post.executionDate);
    //this.executionDate = new FormControl(dateAsstring);
    this.executionDate = post.executionDate;

    console.log("%%%%%%%%%%%%",this.debitAccount);
    //"executionDate":{"year":2019,"month":2,"day":7}}
    console.log('(*&*%*$%#%$@#^)',JSON.stringify(this.executionDate));
    //console.log('&*%^&&%$$',dateAsstring);
    console.log('***************************************************',this.parserFormatter.format(post.executionDate));
    console.log('post',JSON.stringify(post));
    this.paymentListService.savePayment(JSON.stringify(post)).subscribe(
      response => {
        console.log('Data saved!!');
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}