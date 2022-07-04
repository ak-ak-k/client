import { Component, OnInit } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { StorepageshopsComponent } from 'src/app/shopdetails/storepageshops/storepageshops.component';
import { StoreproductpageComponent } from 'src/app/shopdetails/storeproductpage/storeproductpage.component';
import { Page15Component } from '../page15/page15.component';

@Component({
  selector: 'app-products-popup',
  templateUrl: './products-popup.component.html',
  styleUrls: ['./products-popup.component.scss'],
})
export class ProductsPopupComponent implements OnInit {
  constructor(private _bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {}

  openBottomSheet(): void {
    this._bottomSheet.open(Page15Component);
  }
  productpop(): void {
    this._bottomSheet.open(StoreproductpageComponent);
  }
}
