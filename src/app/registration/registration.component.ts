import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  username: string
  password: string
  errorMessage = 'invalid credentials'

  constructor(
    public service: AuthService,
    public route: Router
  ) { }

  ngOnInit(): void {
  }

 
 handleRegistration(username,password){
   this.service.signup(username,password);
   console.log(this.service.invalidLogin);
 }

 checkLogin(){
   return this.service.invalidLogin;
 }

  

}
