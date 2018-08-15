import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { DetailsDataService } from '../shared/details-data.service';
import { Data } from '../shared/data';


@Component({
  selector: 'app-forgot-pass-page',
  templateUrl: './forgot-pass-page.component.html',
  styleUrls: ['./forgot-pass-page.component.css']
})
export class ForgotPassPageComponent implements OnInit {

  ForgotPassForm: FormGroup;
  email:string;
  data:Data;

  constructor(private route:Router,
              private dataService: DetailsDataService ) { }

  ngOnInit() {
    this.ForgotPassForm = new FormGroup({
        'email': new FormControl(null)
       })
    this.dataService.currentEmail.subscribe(
      email => {
        this.email = email;
      });   
  }

  send(){
    this.dataService.sendChangePass({
        email: this.ForgotPassForm.value.email
      }).subscribe(
      data => {
        this.data = data;
        this.sendMessage();
      });
  }

  sendMessage(){
    if(this.data.error == null)
      alert("change passord was sent to your mail");
    else if(this.data.error.code == 1)
            alert(this.data.error.description);
  }

  return2LoginPage(){
    this.route.navigate(['/login-page']);
  }

}
