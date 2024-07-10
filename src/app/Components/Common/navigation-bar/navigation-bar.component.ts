import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthPageComponent } from '../../auth-page/auth-page.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {
  readonly dialog = inject(MatDialog)
  OpenDialog(){
    this.dialog.open(AuthPageComponent)
  }

}
