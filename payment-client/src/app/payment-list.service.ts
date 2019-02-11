import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPayment } from './payment-list';

@Injectable({
  providedIn: 'root'
})
export class PaymentList {

  constructor(private _http: HttpClient) {}
  getPaymentList(): Observable<any>{
      return this._http.get<IPayment[]>('http://localhost:8083/payment-list/list'); 
    }
}
