import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Item } from '../stock/stock.component';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  stock: Item;

  constructor(
    private service:DataService
  ) { }

  ngOnInit(): void {
  }

  createItem(){
    this.service.createItem(this.stock);
  }

}
