import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paybill',
  templateUrl: './paybill.component.html',
  styleUrls: ['./paybill.component.scss'],
})
export class PaybillComponent implements OnInit {
  iMinStore = false;
  makeChanges = false;
  show = false;

  constructor() {}

  ngOnInit(): void {}
}
