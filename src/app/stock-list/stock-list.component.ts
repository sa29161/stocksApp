import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { DataService, Item} from '../service/data.service';
import { StockDataService } from '../service/stock-data.service';


@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  
  items: Item[] = [];
  item: any
  submitted = false;
  show = true;
  name: string;

  constructor(

    public service: DataService,
    public dataService: StockDataService

  ) { }

  ngOnInit(): void {
    
   this.retrieveItems();

  
  }

  retrieveItems(): void {
    this.service.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.items = data;
    });
  }


  saveItem(): void {
    this.service.create(this.item).then(() => {
      console.log('Created new item successfully!')
      console.log(this.item);
      this.submitted = true;
    });
  }

  newItem(): void {
    this.item = new Item();
    this.dataService.getCompanyInfo(this.name)
    .subscribe(response =>{
      this.item = response;
      this.item.results = response.results;
      console.log(response);
      this.saveItem();
    })
    this.submitted = false;
   
  }

}
