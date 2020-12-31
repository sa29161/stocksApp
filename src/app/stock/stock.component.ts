import { Component, OnInit } from '@angular/core';
import { StockDataService } from '../service/stock-data.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  stock: Stock;
  info: Info;
  company: CompanyInfo;
  name: string;
  date: string;

  constructor(
    private stockService: StockDataService
  ) { }

  ngOnInit(): void {

  }



getStocks(){
  this.stockService.retrieveAllStocks(this.name).subscribe(
    response => {
      this.stock = response;
   
    
    
    }
  )
}


getInfo(){
this.stockService.retrieveInfo(this.name).subscribe(
  response =>{
    this.info = response;
    this.date = this.info["Meta Data"]["3. Last Refreshed"];
    this.getCompanyInfo();
   
  }
)
}

getCompanyInfo(){
  this.stockService.retrieveCompanyInfo(this.name).subscribe(
    response =>{
      this.company = response;
      console.log(this.info);
    }
  )
  }
}
export class Stock{
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

export class CompanyInfo{
  constructor(

  ){}
}

export class Item{
  constructor(
   
  ){}
}
