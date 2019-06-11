import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesLayoutComponent} from './layouts/pages-layout/pages-layout.component';

// login 
import {ForgotPasswordComponent} from './UserPages/forgot-password/forgot-password.component';
import {LoginComponent} from './UserPages/login/login.component';
import { RegisterComponent } from "./UserPages/register/RegisterComponent";






const routes: Routes = [
    {
      path: '',
      component: PagesLayoutComponent,
      children: [
  
        // User Pages
  
        {path: 'pages/login', component: LoginComponent, data: {extraParameter: ''}},
        {path: 'pages/register', component: RegisterComponent, data: {extraParameter: ''}},
        {path: 'pages/forgot-password', component: ForgotPasswordComponent, data: {extraParameter: ''}},
      ]
    },
];  
@NgModule({
 imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
    export class AppRoutingModule { }
