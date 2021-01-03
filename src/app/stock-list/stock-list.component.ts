import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { DataService, Tutorial } from '../service/data.service';


@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  
  tutorials: Tutorial[];
  tutorial: Tutorial = new Tutorial();
  submitted = false;
  show = true;

  constructor(

    public service: DataService

  ) { }

  ngOnInit(): void {
   this.retrieveTutorials();
  
  }

  retrieveTutorials(): void {
    this.service.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.tutorials = data;
    });
  }


  saveTutorial(): void {
    this.service.create(this.tutorial).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = new Tutorial();
  }

}
