import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../services/login.services';
import { LoginComponent } from './login-component/login';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    FormsModule,
    CommonModule,
    LoginRoutingModule
  ],
  exports: [],
  providers:[LoginService]
})
export class LoginModule { }