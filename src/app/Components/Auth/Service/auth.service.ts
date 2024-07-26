import { Injectable, inject } from '@angular/core';
import { User } from './UserType';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthSerice {
  constructor(private Http:HttpClient ){}
  private  BaseEndpoint = "http://localhost:3000/"
  private RegisterEndpoint = this.BaseEndpoint + "register";

  readonly LoginEndpoint = this.BaseEndpoint + "login"

   RegisterNewUser(user:User){
    return this.Http.post<User>(this.RegisterEndpoint,{user});
  }

  LoginUser(user:User){
    return this.Http.post<User>(this.LoginEndpoint,{user});
  }






}
