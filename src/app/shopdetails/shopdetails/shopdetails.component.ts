import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopdetails',
  templateUrl: './shopdetails.component.html',
  styleUrls: ['./shopdetails.component.scss'],
})
export class ShopdetailsComponent implements OnInit {
  //
  products = false;
  desc = false;

  //
  about_store = false;
  highlight = false;

  segment: string = 'visit-store';
  openedAccordianLists: any = [];
  storeTyp = '';

  viewTyp = '';

  constructor() {}

  ngOnInit(): void {
    this.storeTyp = 'Onli';
    //this.storeTyp = 'Offl';
    //this.storeTyp = 'Both';

    if (this.storeTyp == 'Onli') {
      this.viewTyp = 'Online';
    }
    if (this.storeTyp == 'Offl') {
      this.viewTyp = 'Offline';
    }
    if (this.storeTyp == 'Both') {
      this.viewTyp = 'Offline';
    }
  }

  getWidth() {
    var state = 0;
    var stateMax = 2;
    //state -= 1;
    return (state / stateMax) * 100 + '%';
  }

  changeSegment(segmentValue: string) {
    this.segment = segmentValue;
  }
}
