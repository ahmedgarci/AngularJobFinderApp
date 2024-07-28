import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInfo } from '../userInfoType/UserInfoType';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private httpClient:HttpClient) { }

  private readonly ApiEndpoint:string = "http://localhost:3000/user/info";

  public getUserInfo(){
    return this.httpClient.get<UserInfo>(this.ApiEndpoint)
  }


}
