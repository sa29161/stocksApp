import { Component, OnInit } from '@angular/core';
import { CompanyInfo } from '../model/company-info.model';
import { StockDataService } from '../service/stock-data.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  company = new CompanyInfo();

  
  constructor(
    private stockService: StockDataService
  ) { }

  ngOnInit(): void {
    this.getCompanyInfo()

  }

  getCompanyInfo(){
    this.stockService.retrieveCompanyInfo(this.stockService.name).subscribe(
      response =>{
        this.company = response;
        this.company.results = response.results;
        console.log(this.company);
      }
    )
    }

}
