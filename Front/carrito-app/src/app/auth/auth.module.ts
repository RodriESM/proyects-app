import { AuthRoutingModule } from './auth-routing.module';
import { RegistroComponent } from './../auth/pages/registro/registro.component';
import { LoginComponent } from './../auth/pages/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
