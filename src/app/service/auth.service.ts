
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
        this.storeSession();
        this.route.navigate(['logout']);
        this.isLogged = false;
      })
      .catch(err => {
        this.isLogged = true;
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    localStorage.removeItem('email');
    sessionStorage.removeItem('authenticateuser');
    this.auth.signOut(); 
  }

 storeSession(){
      this.auth.authState.subscribe(user =>{
        if(user){
          sessionStorage.setItem('authenticateuser',user.uid);}
      })
  }

isUserLoggedIn(){
  let user = sessionStorage.getItem('authenticateuser');
  return !(user === null);
}


}