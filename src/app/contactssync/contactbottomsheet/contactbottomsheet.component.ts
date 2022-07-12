import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ContactsyncComponent } from '../contactsync/contactsync.component';

@Component({
  selector: 'app-contactbottomsheet',
  templateUrl: './contactbottomsheet.component.html',
  styleUrls: ['./contactbottomsheet.component.scss'],
})
export class ContactbottomsheetComponent implements OnInit {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<ContactsyncComponent>
  ) {}

  ngOnInit(): void {}

  close() {
    this._bottomSheetRef.dismiss();
  }
}
