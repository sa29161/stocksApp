import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';


export class Item{
  key?: string | null;
  results: any
  //ticker?: string;
  //description?: string;
  //published?: boolean;

}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public dbPath = '/tutorials';
  email: string;
  items: AngularFireList<Item>;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
   this.afAuth.authState.subscribe(user =>{
     if(user){
     this.email = user.uid; localStorage.setItem('email', user.uid);}
   })
   
  }


  getAll(): AngularFireList<Item> {
if(localStorage.getItem('email') === null) return;
 this.email = localStorage.getItem('email');
   console.log(this.email);
   this.items = this.db.list(`users/${this.email}`);
   return this.items;
  }

  create(item: Item): any {
   if(localStorage.getItem('email') === null) return;
    return this.items.push(item);
  }

  update(key: string, value: any): Promise<void> {
    return this.items.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.items.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.items.remove();
  }
}