import { Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { PostsComponent } from "./Components/Posts/MainPage/posts.component"
import { MainPageComponent } from './Components/jobs/main-page/main-page.component';
import { JobDetailsComponent } from './Components/jobs/job-details/job-details.component';
import { ProfileComponent } from './Components/Profile/profile/MainPage/profile.component';
export const routes: Routes = [
  {path:"" , component:HomePageComponent},
  {path:"posts" ,component:PostsComponent},
  {path:"jobs",component:MainPageComponent},
  {path:'job/specific',component:JobDetailsComponent},
  {path:"user/profile",component:ProfileComponent}

];
