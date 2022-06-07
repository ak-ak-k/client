import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-useroverview',
  templateUrl: './useroverview.component.html',
  styleUrls: ['./useroverview.component.scss'],
})
export class UseroverviewComponent implements OnInit {
  show = false;
  store = false;
  constructor() {}

  ngOnInit(): void {}
}
