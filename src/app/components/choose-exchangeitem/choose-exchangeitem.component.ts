import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ExchangeProductComponent } from '../exchange-product/exchange-product.component';
import { Orderdetail1Component } from '../orderdetail1/orderdetail1.component';

@Component({
  selector: 'app-choose-exchangeitem',
  templateUrl: './choose-exchangeitem.component.html',
  styleUrls: ['./choose-exchangeitem.component.scss'],
})
export class ChooseExchangeitemComponent implements OnInit {
  constructor(private _bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {}

  continue() {
    this._bottomSheet.open(ExchangeProductComponent);
  }
}
