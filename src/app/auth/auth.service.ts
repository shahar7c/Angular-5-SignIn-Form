import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private route: Router) { }

  sendToken(token: string, keepMeSigned:boolean) {
    if(keepMeSigned)
      localStorage.setItem("LoggedInUser", token);
    else
      sessionStorage.setItem("LoggedInUser", token);
  }

  getToken():string {
    return localStorage.getItem("LoggedInUser") || sessionStorage.getItem("LoggedInUser")
  }

  isLoggednIn():boolean {
    return this.getToken() !== null;
  }
  logout() {
    if(localStorage.length > 0)
      localStorage.removeItem("LoggedInUser");
    if(sessionStorage.length > 0)
      sessionStorage.removeItem("LoggedInUser");
    this.route.navigate(['/login-page']);
  }
}
