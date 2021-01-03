
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  invalidLogin = false;
  isLogged = false;
  

  constructor(

    private auth: AngularFireAuth,
    public route: Router
    ) {
  }

  signup(email: string, password: string) {
    this.auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        this.route.navigate(['login']);
        this.invalidLogin = false;
        
        
      })
      .catch(err => {
        this.invalidLogin = true;
        console.log('Something went wrong:',err.message);
        
      });
  }

  login(email: string, password: string) {
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        
        this.route.navigate(['stock']);
      })
      .catch(err => {
   
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    
    this.auth.signOut();
  
    
  }



isLoggedIn(){
return this.isLogged;
  }


}