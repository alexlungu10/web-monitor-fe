import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestService {
  public httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public getCoinRatesByCoinList(coinList: string): Observable<any> {
    const params: HttpParams = new HttpParams().append('coinListAsCsv', coinList);
    console.log(params);
    return this.httpClient.get('http://localhost:8080/getCoinRatesByCoinList', {
      params: params
    });
  }
}
