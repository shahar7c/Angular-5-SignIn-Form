import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DetailsDataService } from '../shared/details-data.service';
import { AuthService } from '../auth/auth.service';

import { Data } from '../shared/data';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;
  data:Data;

  constructor(private formBuilder: FormBuilder,
              private dataService: DetailsDataService,
              private autoService: AuthService,
              private route:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: '',
      keepSigned: false
    })
  }

  forgotPass(){
    this.route.navigate(['/forgot-pass-page']);
  }

  signIn() {
    let userDetails = {
      "email": this.loginForm.value.email,
      "password":this.loginForm.value.password
    }
    this.dataService.loginUser(userDetails).subscribe(
      res => { 
        this.data = res;  
        this.checkAuth();        
      }
    ); 
  }

  checkAuth() {
    if(this.data.error == null){     //sucssuful login, should set token form server api.
      this.autoService.sendToken(this.data.user.email, this.loginForm.value.keepSigned);
      this.route.navigate(['/home-page']); 
    }
    else if(this.data.error.code == 1) {    //Email doesn’t exists 
      alert(this.data.error.description);  
    }
    else if(this.data.error.code == 2) {    //Password is incorrect
      alert(this.data.error.description);
      this.dataService.changeEmail(this.loginForm.value.email);
      this.route.navigate(['/forgot-pass-page']); 
    }
  }
}