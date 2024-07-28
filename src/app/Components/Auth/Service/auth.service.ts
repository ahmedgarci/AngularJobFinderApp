import { Injectable, inject } from '@angular/core';
import { User } from './UserType';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { UserAuthencticationService } from '../Guard/user-authenctication.service';

@Injectable({
  providedIn: 'root'
})

export class AuthSerice {
  constructor(private Http:HttpClient, private userAuth:UserAuthencticationService ){}

  private  BaseEndpoint = "http://localhost:3000/"
  private RegisterEndpoint = this.BaseEndpoint + "register";

  readonly LoginEndpoint = this.BaseEndpoint + "login"

   RegisterNewUser(user:User){
    return this.Http.post<User>(this.RegisterEndpoint,{user});
  }

  LoginUser(user:User){
    return this.Http.post<User>(this.LoginEndpoint,{user})
    .pipe(tap(LoggedUser=>this.userAuth.Login(LoggedUser)))

  }






}
