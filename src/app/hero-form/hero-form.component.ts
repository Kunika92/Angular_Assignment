import { Component, OnInit } from '@angular/core';
import { ContactForm }    from '../contact-form';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  // powers = ['Really Smart', 'Super Flexible',
  //           'Super Hot', 'Weather Changer'];

  model = new ContactForm(18, 'John', 'John@email.com');

  submitted = false;

  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model); }

  newHero() {
    this.model = new ContactForm(42, '', '');
  }

  constructor() { }

  ngOnInit() {
  }

}
