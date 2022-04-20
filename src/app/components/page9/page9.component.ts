import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page9',
  templateUrl: './page9.component.html',
  styleUrls: ['./page9.component.scss'],
})
export class Page9Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  search: String = '';

  show = false;

  skin = false;

  hair = false;

  fragrance = false;
}
