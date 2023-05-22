import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(@Inject('BASE_URL') baseUrl: string) {
    console.log('hello', baseUrl);
  }
}
