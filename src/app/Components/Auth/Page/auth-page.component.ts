import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { User } from '../Service/UserType';
import { AuthSerice } from '../Service/auth.service';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent {
  constructor(private Fb:FormBuilder,private authService:AuthSerice){}

  showRegister:boolean = false;

  AuthForm = this.Fb.group({
    email:[null],
    password:[null],
    username:[null]
  })

  SetRegisterFields(){
    this.showRegister = !this.showRegister
  }



  setUser():User{
    const user:User = {
        email : this.AuthForm.value.email || null,
        password : this.AuthForm.value.password || null,
        picture : null,
        username:this.AuthForm.value.username || null
    }
    return user
  }


  RegisterUser(){
    let user:User = this.setUser();
    this.authService.RegisterNewUser(user).subscribe({
      next:(response)=>console.log(response),
      error:(err)=>console.log(err)
    })
  }

  LoginUser(){
    let user:User = this.setUser();
    this.authService.LoginUser(user).subscribe({
      next:(response)=>console.log(response),
      error:(err)=>console.log(err)
    })
  }



}
