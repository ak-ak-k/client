import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invitecontacts',
  templateUrl: './invitecontacts.component.html',
  styleUrls: ['./invitecontacts.component.scss'],
})
export class InvitecontactsComponent implements OnInit {
  invitecontact: Array<any> = [];

  constructor() {
    this.invitecontact.push(
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

  ngOnInit(): void {}
}
