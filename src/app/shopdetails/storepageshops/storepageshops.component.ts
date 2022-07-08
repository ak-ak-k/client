import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/components/refrcash/refrcash.component';
import { ShopdetailsComponent } from '../shopdetails/shopdetails.component';

@Component({
  selector: 'app-storepageshops',
  templateUrl: './storepageshops.component.html',
  styleUrls: ['./storepageshops.component.scss'],
})
export class StorepageshopsComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ShopdetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  isReadMore = true;

  showText() {
    this.isReadMore = !this.isReadMore;
  }
}
