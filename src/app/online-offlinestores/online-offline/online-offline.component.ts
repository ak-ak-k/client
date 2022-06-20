import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenucomponentComponent } from './menucomponent/menucomponent.component';
//

import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-online-offline',
  templateUrl: './online-offline.component.html',
  styleUrls: ['./online-offline.component.scss'],
})
export class OnlineOfflineComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  // openDialog(mode: any): void {
  //   this._bottomSheet.open(MenucomponentComponent);
  // }

  openDialog(mode: any) {
    const dialogRef = this.dialog.open(MenucomponentComponent, {
      data: mode,
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '70%',
      width: '100%',
      panelClass: 'full-screen-modal',
    });
  }
}
