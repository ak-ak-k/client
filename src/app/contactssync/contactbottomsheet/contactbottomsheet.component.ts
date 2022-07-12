import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ContactsyncComponent } from '../contactsync/contactsync.component';

@Component({
  selector: 'app-contactbottomsheet',
  templateUrl: './contactbottomsheet.component.html',
  styleUrls: ['./contactbottomsheet.component.scss'],
})
export class ContactbottomsheetComponent implements OnInit {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<ContactsyncComponent>,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      name: this.fb.control('', [Validators.required]),
      number: this.fb.control('', [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      ]),
    });
  }

  ngOnInit(): void {}

  form: FormGroup = new FormGroup({});

  get f() {
    return this.form.controls;
  }

  close() {
    this._bottomSheetRef.dismiss();
  }

  submit() {
    console.log(this.form.value);
  }
}
