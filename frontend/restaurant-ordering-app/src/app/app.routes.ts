import { Routes } from '@angular/router';
import { SearchRestaurantsComponent } from './components/search-restaurants.component';

export const routes: Routes = [
  { path: '', component: SearchRestaurantsComponent }, // ✅ Make this the default route
];
     