import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../UserInfo/user-info.service';
import { UserInfo } from '../userInfoType/UserInfoType';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent implements OnInit {
  constructor(private UserInfoService:UserInfoService){}

  userData:UserInfo|null=null;


  ngOnInit(): void {
    this.UserInfoService.getUserInfo().subscribe({
      next:(userInfo:any)=>{
        this.userData = userInfo.data;
        console.log(this.userData);
        if(this.userData && this.userData?.skills){
          this.userData.skills = JSON.parse(userInfo.data.skills)
        }
      },
      error:(error)=>console.log(error)
    })
  }




}
