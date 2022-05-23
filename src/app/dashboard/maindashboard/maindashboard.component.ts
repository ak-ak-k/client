import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html',
  styleUrls: ['./maindashboard.component.scss'],
})
export class MaindashboardComponent implements OnInit {
  isLinear = true;
  showDetailsRedeem = [{ show: false }, { show: false }];
  showLedgerOrders = [{ show: false }, { show: false }];

  showDetailsOrders = [
    { show: false },
    { show: false },
    { show: false },
    { show: false },
    { show: false },
    { show: false },
    { show: false },
    { show: false },
  ];

  @ViewChild(MatStepper) stepper!: MatStepper;

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 850px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngAfterViewInit() {
    this.stepper._getIndicatorType = () => 'number';
  }

  expandRedeemCard(i: any) {
    this.showDetailsRedeem[i].show = !this.showDetailsRedeem[i].show;
  }

  expandOrderCard(i: any) {
    this.showDetailsOrders[i].show = !this.showDetailsOrders[i].show;
  }

  expandLedgerCard(i: any) {
    this.showLedgerOrders[i].show = !this.showLedgerOrders[i].show;
  }

  ngOnInit(): void {}
}
