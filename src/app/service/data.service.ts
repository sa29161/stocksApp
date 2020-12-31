import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

export class Item{
  body: string;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  items: AngularFireList<Item[]> = null;
  userId : string
  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    })
   }

   getItemsList(): any{
     if(!this.userId) return;
     this.items = this.db.list(`items/${this.userId}`);
     return this.items}

   

   createItem(item: any){
     this.items.push(item);
   }

  }