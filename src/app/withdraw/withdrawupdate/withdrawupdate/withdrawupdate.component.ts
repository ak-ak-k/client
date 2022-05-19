import { Component, OnInit } from '@angular/core';

interface status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-withdrawupdate',
  templateUrl: './withdrawupdate.component.html',
  styleUrls: ['./withdrawupdate.component.scss'],
})
export class WithdrawupdateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  statuslist: status[] = [
    { value: 'steak-0', viewValue: 'Active' },
    { value: 'pizza-1', viewValue: 'Inactive' },
  ];
}
