import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPayment } from './payment-list';

@Injectable({
  providedIn: 'root'
})
export class PaymentList {

  constructor(private _http: HttpClient) {}
  getPaymentList(): Observable<any>{
    //return this._http.get<IPayment[]>('http://13.76.156.222:80/payment-list/list'); 
    return this._http.get<IPayment[]>('http://localhost:8089/payment-list/list'); 
  }

  savePayment(payment: string): Observable<any>{
    let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/json'})};
    //let options = new RequestOptions({ headers: headers });
    //return this._http.post('http://13.76.156.222:80/payment-list/save',payment,headers); 
    return this._http.post('http://localhost:8089/payment-list/save',payment,headers); 
  }

}
