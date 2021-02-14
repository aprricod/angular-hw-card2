import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component implements OnInit {
  title = 'My new title';

  constructor() {}

  OnInput(event: any) {
    this.title = event.target.value;
  }

  ngOnInit(): void {}
}
