import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationComponent } from '../registration/registration.component';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<any>;
  invalidLogin = false;
  isLogged = true;

  constructor(private auth: AngularFireAuth,
    public route: Router,
    ) {
    this.user = auth.authState;
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
        this.isLogged = true
        this.isUserLoggedIn();
        this.route.navigate(['stock']);
      })
      .catch(err => {
        this.isLogged = false
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    this.isLogged = false;
    this.auth.signOut();
    this.isUserLoggedIn();
    
  }



  isUserLoggedIn(){
    this.auth.onAuthStateChanged(user =>{
      if(user){
        console.log('user has logged in');}
        else{
          console.log('user has logged out');
        }
    
     
    })

  }


}