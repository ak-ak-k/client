import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { HowitworkbottompopupComponent } from '../howitworkbottompopup/howitworkbottompopup.component';

@Component({
  selector: 'app-bottomsup',
  templateUrl: './bottomsup.component.html',
  styleUrls: ['./bottomsup.component.scss'],
})
export class BottomsupComponent implements OnInit {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(HowitworkbottompopupComponent);
  }

  ngOnInit(): void {}
}
