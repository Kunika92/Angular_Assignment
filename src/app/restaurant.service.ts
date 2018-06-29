import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant';
import { RESTAURANTS } from './mock-restaurants';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class RestaurantService {
  private restaurantsUrl = 'api/restaurants';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private log(message: string) {
    this.messageService.add('RestaurantService: ' + message);
  }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.restaurantsUrl);
  }

  getRestaurant(id: number): Observable<Restaurant> {
    this.messageService.add(`RestaurantService: fetched restaurant id=${id}`);
    return of(RESTAURANTS.find(restaurant => restaurant.id === id));
  }
}
