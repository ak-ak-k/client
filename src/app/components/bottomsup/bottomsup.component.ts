import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SharingscreenComponent } from 'src/app/sharingscreen/sharingscreen/sharingscreen.component';

import { HowitworkbottompopupComponent } from '../howitworkbottompopup/howitworkbottompopup.component';
import { InvitecontactsComponent } from '../invitecontacts/invitecontacts.component';
import { RefrnowinviteComponent } from '../invitecontacts/refrnowinvite/refrnowinvite.component';

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

  invite() {
    this._bottomSheet.open(InvitecontactsComponent);
  }

  refrnow() {
    this._bottomSheet.open(RefrnowinviteComponent, {
      panelClass: 'custom_width',
    });
  }

  share() {
    this._bottomSheet.open(SharingscreenComponent, {
      panelClass: 'sharescreen',
    });
  }

  ngOnInit(): void {}
}
