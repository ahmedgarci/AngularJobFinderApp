import { Component } from '@angular/core';
import { NavigationBarComponent } from '../Common/navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavigationBarComponent,],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {


}
