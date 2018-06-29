import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../restaurant';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RestaurantService }  from '../restaurant.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})

export class RestaurantDetailComponent implements OnInit {

  @Input() restaurant: Restaurant;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getRestaurant();
  }

  getRestaurant(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.restaurantService.getRestaurant(id)
      .subscribe(hero => this.restaurant = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
