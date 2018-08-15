import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { LoginPageComponent } from './login-page/login-page.component';
import { ForgotPassPageComponent } from './forgot-pass-page/forgot-pass-page.component'; 
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full', canActivate:[AuthGuard] },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'forgot-pass-page', component: ForgotPassPageComponent },
  { path: 'home-page', component: HomePageComponent, canActivate:[AuthGuard] }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
