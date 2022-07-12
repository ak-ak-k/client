import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ContactbottomsheetComponent } from '../contactbottomsheet/contactbottomsheet.component';

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
  constructor(private _bottomSheet: MatBottomSheet) {}

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

  addcontact() {
    this._bottomSheet.open(ContactbottomsheetComponent, {
      panelClass: 'aaaaaaaaaaaaaaaaaaaaaa',
    });
  }
}
