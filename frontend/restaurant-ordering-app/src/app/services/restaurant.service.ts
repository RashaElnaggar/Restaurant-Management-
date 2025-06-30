import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from '../models/restaurant.model';

@Injectable({ providedIn: 'root' })
export class RestaurantService {
  private apiUrl = 'https://localhost:7024/Cities'; 

  constructor(private http: HttpClient) {}

//     getRestaurantsByCity(cityId: number): Observable<Restaurant[]> {
//   return this.http.get<Restaurant[]>(`https://localhost:7024/api/City/${cityId}/restaurants`);
  
// }
// getCities(): Observable<City[]> {
//   return this.http.get<City[]>('https://localhost:7024/api/City');
// }
getRestaurantsByCityName(cityName: string): Observable<Restaurant[]> {
  return this.http.get<Restaurant[]>(
    `https://localhost:7024/api/Cities/search?cityName=${encodeURIComponent(cityName)}`
  );
}

  }

