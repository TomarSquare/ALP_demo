import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDebitAcc } from './debitAcc';
import { ICreditAcc } from './creditAcc';

@Injectable({
  providedIn: 'root'
})
export class CreditAcService {

  constructor(private _http: HttpClient) {}
    getDebitAc(): Observable<any>{
      return this._http.get<IDebitAcc[]>('http://localhost:8083/debitac/getAll'); 
    }

    getCreditAc(): Observable<any>{
      return this._http.get<ICreditAcc[]>('http://localhost:8083/creditac/getAll');
    }
}
