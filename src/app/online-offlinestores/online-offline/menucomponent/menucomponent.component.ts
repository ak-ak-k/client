import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
@Component({
  selector: 'app-menucomponent',
  templateUrl: './menucomponent.component.html',
  styleUrls: ['./menucomponent.component.scss'],
})
export class MenucomponentComponent implements OnInit {
  toggleSubmenu = true;
  constructor(
    @Inject(MAT_DIALOG_DATA) public mode: any,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    console.log(this.mode);
  }

  close() {
    this.dialog.closeAll();
  }
}
