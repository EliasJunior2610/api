import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  private baseUrl = 'https://openexchangerates.org/api/';

  constructor(private http: HttpClient) { }


  getLatestRates(appId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}latest.json?app_id=${appId}`);
  }
  
}
