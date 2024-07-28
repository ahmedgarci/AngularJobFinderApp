import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthPageComponent } from '../../Auth/Page/auth-page.component';
import { RouterLink } from '@angular/router';
import { UserAuthencticationService } from '../../Auth/Guard/user-authenctication.service';
import { User } from '../../Auth/Service/UserType';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})

export class NavigationBarComponent {

  constructor(private UserAuth:UserAuthencticationService){}

  user:User|null = this.UserAuth.userInfo.value;

  readonly dialog = inject(MatDialog)
  OpenDialog(){
    this.dialog.open(AuthPageComponent)
  }



}
