import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenucomponentComponent } from 'src/app/online-offlinestores/online-offline/menucomponent/menucomponent.component';

@Component({
  selector: 'app-foodproduct',
  templateUrl: './foodproduct.component.html',
  styleUrls: ['./foodproduct.component.scss'],
})
export class FoodproductComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

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
