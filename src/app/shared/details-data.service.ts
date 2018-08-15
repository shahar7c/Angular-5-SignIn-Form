import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Data } from './data';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DetailsDataService {

  private loginUrl = 'https://globalbit.co.il/front-end-assignment/login.php';  
  private forgotPassUrl = 'https://globalbit.co.il/front-end-assignment/forgot-password.php';
  
  private emailSource = new BehaviorSubject("Your Email");
  currentEmail = this.emailSource.asObservable();

  data:Data;

  constructor(private http:HttpClient) { }

  changeEmail(email: string) {
    this.emailSource.next(email);
  }

  loginUser(user) : Observable<Data> {
    return this.http.post<Data>(this.loginUrl, user);
  }

  sendChangePass(email): Observable<Data> {
    return this.http.post<Data>(this.forgotPassUrl, email);
  }
}