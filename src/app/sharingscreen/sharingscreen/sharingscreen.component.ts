import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-sharingscreen',
  templateUrl: './sharingscreen.component.html',
  styleUrls: ['./sharingscreen.component.scss'],
})
export class SharingscreenComponent implements OnInit {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<SharingscreenComponent>
  ) {}

  ngOnInit(): void {}

  close() {
    this._bottomSheetRef.dismiss();
  }
}
