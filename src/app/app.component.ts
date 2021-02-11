import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'homework1-card2';
  msg = 'First msg';
  arrayClick = [];

  red = '255,0,0';
  yellow = '255,255,0';
  green = '0,255,0';
  lightblue = '0,255,255';
  blue = '0,0,255';
  violet = '255,0,255';

  add() {
    this.arrayClick.push('Hello!');
  }

  clean() {
    this.arrayClick = [];
  }

  constructor() {
    setTimeout(() => {
      console.log('Time is over');
      this.msg = 'Secong msg';
    }, 5000);
  }
}
