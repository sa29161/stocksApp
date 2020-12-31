import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stock } from '../stock/stock.component';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {

  constructor(private http:HttpClient) { }


  retrieveAllStocks(stock){
    return this.http.get<Stock>(`http://localhost:8080/stocks?stock=${stock}`)
  }

  retrieveInfo(stock){
    return this.http.get<Stock>(`http://localhost:8080/info?stock=${stock}`)
  }

  retrieveCompanyInfo(stock){
    return this.http.get<Stock>(`http://localhost:8080/company?stock=${stock}`)
  }
}
