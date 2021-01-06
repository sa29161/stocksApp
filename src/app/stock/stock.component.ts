import { Component, OnInit } from '@angular/core';
import { StockDataService } from '../service/stock-data.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { InfoComponent } from '../info/info.component';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  stock: Stock;
  info: Info;
  name: string;
  date: string;
  obj: any;


  constructor(
    private stockService: StockDataService
  ) { }

  ngOnInit(): void {
 
  }



getStocks(){
  this.stockService.retrieveAllStocks(this.name).subscribe(
    response => {
  
      this.stock = response;
      console.log(response)
   
    
    
    }
  )
}


getInfo(){
this.stockService.retrieveInfo(this.name).subscribe(
  response =>{
    this.info = response;
    this.date = this.info["Meta Data"]["3. Last Refreshed"];
   // this.getCompanyInfo();
   
  }
)
}

setVar(i){
  console.log(i);
  this.stockService.name = this.stock.bestMatches[i]["1. symbol"];
}


}

export class Stock{
  results: any;
  ticker: string;
  constructor(
    public bestMatches: string,
    public symbol: string,
    public name: string
  ){}
}

export class Info{
  constructor(

  ){}
}


