import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RestaurantService } from '../services/restaurant.service';
import { Restaurant } from '../models/restaurant.model';


@Component({
  selector: 'app-search-restaurants',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-restaurants.component.html'
  
})
export class SearchRestaurantsComponent {
  selectedCityId: number = 0;
  searchPerformed: boolean = false;

  cityName: string = '';
  restaurantName: string = '';

  restaurants: Restaurant[] = [];
  loading = false;

  constructor(private restaurantService: RestaurantService) {}

  search():void {
  this.loading = true;
  this.searchPerformed = true;
    const trimmedCity = this.cityName.trim();
  const trimmedRestaurant = this.restaurantName.trim();

  if (trimmedCity){
  this.restaurantService.getRestaurantsByCityName(trimmedCity).subscribe({
    next: (data:Restaurant[]) => {
      console.log("🍽 Restaurants received:", data); // ✅ Check this
      this.restaurants = data;
      this.loading = false;
      
    },
    error: (err) => {
      console.error('Error loading restaurants', err);
      this.restaurants = [];
      this.loading = false;
      
    }
  });
}
  
  else if (trimmedRestaurant) {
    this.restaurantService.getRestaurantsByName(trimmedRestaurant).subscribe({
      next: (data :Restaurant[]) => {
        this.restaurants = data;
        this.loading = false;
     


      },
      error: () => {
        this.restaurants = [];
        this.loading = false;
      }
    });
  } else {
    this.loading = false;
  }

console.log(this.restaurants);

}

}