import { Component } from '@angular/core';
import { NavigationBarComponent } from '../../Common/navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [NavigationBarComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

}
