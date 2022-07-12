import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactsync',
  templateUrl: './contactsync.component.html',
  styleUrls: ['./contactsync.component.scss'],
})
export class ContactsyncComponent implements OnInit {
  viewTyp = '';
  storeTyp = '';

  changeViewTyp(segmentValue: string) {
    this.viewTyp = segmentValue;
  }
  constructor() {}

  ngOnInit(): void {
    this.storeTyp = 'Refrcust';

    if (this.storeTyp == 'Allcust') {
      this.viewTyp = 'Allcustomer';
    }
    if (this.storeTyp == 'Refrcust') {
      this.viewTyp = 'Refrcustomer';
    }
    if (this.storeTyp == 'Both') {
      this.viewTyp = 'Refrcustomer';
    }
  }
}
