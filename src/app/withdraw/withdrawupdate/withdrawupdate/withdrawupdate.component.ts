import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/components/refrcash/refrcash.component';
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
  cancel(): void {
    this.dialogRef.close();
  }
  constructor(
    public dialogRef: MatDialogRef<WithdrawupdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {}

  statuslist: status[] = [
    { value: 'steak-0', viewValue: 'Active' },
    { value: 'pizza-1', viewValue: 'Inactive' },
  ];
}
