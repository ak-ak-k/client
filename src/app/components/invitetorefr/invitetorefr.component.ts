import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { InvitecontactsComponent } from '../invitecontacts/invitecontacts.component';
import { RefrnowinviteComponent } from '../invitecontacts/refrnowinvite/refrnowinvite.component';

@Component({
  selector: 'app-invitetorefr',
  templateUrl: './invitetorefr.component.html',
  styleUrls: ['./invitetorefr.component.scss'],
})
export class InvitetorefrComponent implements OnInit {
  name: string = 'aditya';

  constructor(private _bottomSheet: MatBottomSheet) {
    this.name = this.name.charAt(0).toUpperCase() + this.name.slice(1);
    console.log(this.name);
  }

  ngOnInit(): void {}

  refrnow() {
    this._bottomSheet.open(RefrnowinviteComponent, {
      panelClass: 'custom_width',
    });
  }

  invite() {
    this._bottomSheet.open(InvitecontactsComponent);
  }
}
