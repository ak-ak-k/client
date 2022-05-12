import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ExchangeProductComponent } from '../exchange-product/exchange-product.component';

@Component({
  selector: 'app-mk1',
  templateUrl: './mk1.component.html',
  styleUrls: ['./mk1.component.scss'],
})
export class Mk1Component implements OnInit {
  constructor(private _bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {}

  continue() {
    this._bottomSheet.open(ExchangeProductComponent);
  }
}
