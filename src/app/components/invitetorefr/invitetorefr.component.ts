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

  contacts: Array<any> = [];

  constructor(private _bottomSheet: MatBottomSheet) {
    this.name = this.name.charAt(0).toUpperCase() + this.name.slice(1);
    console.log(this.name);
  }

  ngOnInit(): void {
    this.contacts.push(
      {
        img: 'a',
        name: 'aditya kirtane',
        number: '8879751140',
      },
      {
        img: 'd',
        name: 'Dipesh Bhoir',
        number: '8879751140',
      },
      {
        img: 'r',
        name: 'Roshan',
        number: '8879751140',
      },
      {
        img: 'h',
        name: 'hardik karnavat',
        number: '8879751140',
      },
      {
        img: 's',
        name: 'Shraddha',
        number: '8879751140',
      },
      {
        img: 's',
        name: 'Simran',
        number: '8879751140',
      }
    );
  }

  refrnow() {
    this._bottomSheet.open(RefrnowinviteComponent, {
      panelClass: 'custom_width',
    });
  }

  invite() {
    this._bottomSheet.open(InvitecontactsComponent);
  }
}
