import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stock } from '../stock/stock.component';
import { Item } from './data.service';
import { News } from '../info/info.component';
import { Chart } from '../stock-chart/stock-chart.component';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {
  name: string

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

  getCompanyInfo(stock){
    return this.http.get<Item>(`http://localhost:8080/company?stock=${stock}`)
  }

  getNews(stock){
    return this.http.get<News>(`http://localhost:8080/news?stock=${stock}`)
  }

  getChart(stock){
    return this.http.get<Chart>(`http://localhost:8080/chart?stock=${stock}`)
  }
}
