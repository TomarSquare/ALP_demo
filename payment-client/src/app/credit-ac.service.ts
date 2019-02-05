import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditAcService {

  constructor(private _http: HttpClient) {}
    getDebitAc(): Observable<any>{
      return this._http.get('http://localhost:8083/debitac/ac/1'); 
    }
}
