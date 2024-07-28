import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../UserInfo/user-info.service';
import { UserInfo } from '../userInfoType/UserInfoType';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent implements OnInit {
  constructor(private UserInfoService:UserInfoService){}

  userData:UserInfo|null = null;


  ngOnInit(): void {
    this.UserInfoService.getUserInfo().subscribe({
      next:(userInfo:any)=>{
        this.userData = userInfo.data;
        console.log(this.userData);
      },
      error:(error)=>console.log(error)
    })
  }




}
