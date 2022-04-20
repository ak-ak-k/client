import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Refrcash1Component } from '../refrcash1/refrcash1.component';
import { Refrcash2Component } from '../refrcash2/refrcash2.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-refrcash',
  templateUrl: './refrcash.component.html',
  styleUrls: ['./refrcash.component.scss'],
})
export class RefrcashComponent implements OnInit {
  // animal: string;
  // name: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(Refrcash1Component, {
      width: '350px',
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(Refrcash2Component, {
      width: '350px',
    });
  }
}
