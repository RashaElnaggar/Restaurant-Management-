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

  cityName = '';
  restaurants: Restaurant[] = [];
  loading = false;

  constructor(private restaurantService: RestaurantService) {}

  search() {
  this.loading = true;
  this.searchPerformed = false;

  this.restaurantService.getRestaurantsByCityName(this.cityName.trim()).subscribe({
    next: (data) => {
      console.log("🍽 Restaurants received:", data); // ✅ Check this
      this.restaurants = data;
      this.loading = false;
      this.searchPerformed = true;
    },
    error: (err) => {
      console.error('Error loading restaurants', err);
      this.restaurants = [];
      this.loading = false;
      this.searchPerformed = true;
    }
  });
}



}
