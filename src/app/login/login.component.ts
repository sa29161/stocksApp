import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string
  password: string
  errorMessage = 'invalid credentials'

  constructor(
    public route: Router,
    public service: AuthService
  ) { }

  ngOnInit(): void {
  }

  handleLogin(username,password){
  this.service.login(username,password);
}

register(){
this.route.navigate(['register'])
}


checkLogin(){
  return this.service.isLogged;
}
}