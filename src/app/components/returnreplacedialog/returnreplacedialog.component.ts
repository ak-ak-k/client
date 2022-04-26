import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Orderdetail4Component } from '../orderdetail4/orderdetail4.component';
import { ReplaceitemsComponent } from '../replaceitems/replaceitems.component';
import { ReturnitemsComponent } from '../returnitems/returnitems.component';

@Component({
  selector: 'app-returnreplacedialog',
  templateUrl: './returnreplacedialog.component.html',
  styleUrls: ['./returnreplacedialog.component.scss'],
})
export class ReturnreplacedialogComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ReturnreplacedialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Orderdetail4Component
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  return() {
    const dialogRef = this.dialog.open(ReturnitemsComponent, {
      width: '270px',
    });
  }

  replace() {
    const res = this.dialog.open(ReplaceitemsComponent, {
      width: '270px',
    });
  }
}
