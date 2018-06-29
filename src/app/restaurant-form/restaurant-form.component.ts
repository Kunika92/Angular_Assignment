import { Component, OnInit } from '@angular/core';
import { ContactForm }    from '../contact-form';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent implements OnInit {
  // powers = ['Really Smart', 'Super Flexible',
  //           'Super Hot', 'Weather Changer'];

  model = new ContactForm(18, 'John', 'John@email.com');

  submitted = false;

  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model); }

  newRestaurant() {
    this.model = new ContactForm(42, '', '');
  }

  constructor() { }

  ngOnInit() {
  }

}
