import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';


export class Tutorial{
  key?: string | null;
  title?: string;
  description?: string;
  published?: boolean;

}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dbPath = '/users';
  tutorialsRef: AngularFireList<Tutorial>;
  email: string;
  arr: Tutorial[] = [];


  constructor(private db: AngularFireDatabase, private auth: AngularFireAuth) {
   this.auth.authState.subscribe(user =>{
     if(user) this.email = user.uid;
   })
   
   }


  getAll(): AngularFireList<Tutorial> {
    if(!this.email) return;
    this.tutorialsRef = this.db.list(`users/${this.email}`);
    return this.tutorialsRef;
  }

  getArr(): Tutorial[]{
    if(!this.email) return;
    this.db.list(`users/${this.email}`).valueChanges()
    .subscribe(
      response => {
        this.arr = response;
        console.log(this.arr);
        return this.arr;
      }
    )

  }



  create(tutorial: Tutorial): any{
   if(!this.email) return;
   this.getAll();
   this.getArr();
  return this.tutorialsRef.push(tutorial);
  }

  update(key: string, value: any): Promise<void> {
    return this.tutorialsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.tutorialsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.tutorialsRef.remove();
  }
}
