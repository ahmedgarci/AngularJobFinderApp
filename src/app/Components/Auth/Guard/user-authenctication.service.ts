import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { User } from "../Service/UserType";

@Injectable({
  providedIn: 'root'
})
export class UserAuthencticationService {

  constructor() { }

  public readonly isLoggedIn:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public readonly userInfo:BehaviorSubject<User| null> = new BehaviorSubject<User | null>(null)
  
  Login(user:User){
    this.isLoggedIn.next(true);
    this.userInfo.next(user);
  }

  Logout(){
    this.isLoggedIn.next(false);
    this.userInfo.next(null);
  }



}
