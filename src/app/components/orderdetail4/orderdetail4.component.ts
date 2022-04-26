import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogData } from '../refrcash/refrcash.component';
import { ReturnreplacedialogComponent } from '../returnreplacedialog/returnreplacedialog.component';

@Component({
  selector: 'app-orderdetail4',
  templateUrl: './orderdetail4.component.html',
  styleUrls: ['./orderdetail4.component.scss'],
})
export class Orderdetail4Component implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  show = false;

  openDialog(): void {
    const dialogRef = this.dialog.open(ReturnreplacedialogComponent, {
      width: '250px',
    });
  }
}
