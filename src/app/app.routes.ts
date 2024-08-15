import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

export const routes: Routes = [

{ path:"", redirectTo:"Home", pathMatch:"full"},
{path:"Home" , component:HomeComponent},
{path:"Search/:fromstationID/:tostationID/:dateofTravel" , component:SearchComponent},



];
