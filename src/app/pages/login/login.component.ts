import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {emailVerified} from "@angular/fire/auth-guard";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
public tab: string = "login";
public register = {
  email: "",
  password: ""
};
public login = {
    email: "",
    password: ""
  };
  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }
  public registerUser() {
    this.auth.registerByEmailAndPassword(this.register.email, this.register.password)
  }
  public loginUser() {
    this.auth.loginByEmailAndPassword(this.login.email, this.login.password)
  }
  public googlelogin(){
    this.auth.googlelogin()
  }
  public facebooklogin(){
    this.auth.facebooklogin()
  }
  public logOut(){
    this.auth.logOut()
  }

}
