import { Component, OnInit } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { OnlinestoreconditionsComponent } from 'src/app/components/termsnconditions/onlinestoreconditions/onlinestoreconditions.component';
import { RedeemofflineComponent } from 'src/app/howtoredeem/redeemoffline/redeemoffline.component';
import { RedeemonlineComponent } from 'src/app/howtoredeem/redeemonline/redeemonline.component';
import { OfflinestorehowitworksComponent } from '../offlinestorehowitworks/offlinestorehowitworks.component';
import { OnoffstorehowitworksComponent } from '../onoffstorehowitworks/onoffstorehowitworks.component';
import { ShoptermnconditionComponent } from '../shoptermncondition/shoptermncondition.component';
import { StorepageshopsComponent } from '../storepageshops/storepageshops.component';
import { StoreproductpageComponent } from '../storeproductpage/storeproductpage.component';

@Component({
  selector: 'app-shopdetails',
  templateUrl: './shopdetails.component.html',
  styleUrls: ['./shopdetails.component.scss'],
})
export class ShopdetailsComponent implements OnInit {
  para: any = 'This is some text. This is some text. This is some text.';

  highlights = false;
  show = false;
  brrr = false;
  constructor(
    private dialog: MatDialog,
    private _bottomSheet: MatBottomSheet
  ) {}

  //

  abc() {
    console.log(this.para);
  }

  isReadMore = true;

  showText() {
    this.isReadMore = !this.isReadMore;
  }

  get getheight() {
    return window.innerHeight;
  }
  get getwidth() {
    return window.innerWidth;
  }

  storeLoc() {
    let isPhone = this.getwidth < 768;
    let w = isPhone ? this.getwidth + 'px' : '480px';
    let h = isPhone ? this.getheight + 'px' : '98vh';
    const refDialog = this.dialog.open(StorepageshopsComponent, {
      width: w,
      minWidth: '320px',
      maxWidth: '480px',
      height: '500px',
      hasBackdrop: true,
      disableClose: false,
      panelClass: 'dialogLayout', //, autoFocus:false
    });
    refDialog.afterClosed().subscribe(() => {});
  }

  openBottomSheet(): void {
    // this._bottomSheet.open(RedeemonlineComponent);
    this._bottomSheet.open(RedeemofflineComponent);
  }

  termncondition(): void {
    this._bottomSheet.open(ShoptermnconditionComponent);
  }

  productpop(): void {
    this._bottomSheet.open(StoreproductpageComponent);
  }

  // storeLoc(): void {
  //   const dialogRef = this.dialog.open(StorepageshopsComponent, {
  //     width: '100%',
  //   });
  // }

  //

  products = false;
  deserts = false;
  desc = false;
  iMinStore = false;
  makeChanges = false;
  showAddToCard: boolean = false;

  //
  tick = false;
  ticked = false;
  //
  about_store = false;
  highlight = false;

  //segment: string = 'visit-store';
  openedAccordianLists: any = [];
  storeTyp = '';

  viewTyp = '';

  ngOnInit(): void {
    this.storeTyp = 'Offl';
    //this.storeTyp = 'Offl';
    //this.storeTyp = 'Both';

    if (this.storeTyp == 'Onli') {
      this.viewTyp = 'Online';
    }
    if (this.storeTyp == 'Offl') {
      this.viewTyp = 'Offline';
    }
    if (this.storeTyp == 'Both') {
      this.viewTyp = 'Hybrid';
    }
  }

  getWidth() {
    var state = 0;
    var stateMax = 2;
    //state -= 1;
    return (state / stateMax) * 100 + '%';
  }

  changeViewTyp(segmentValue: string) {
    this.viewTyp = segmentValue;
  }

  showAndHideAddToCard() {
    this.showAddToCard = true;
  }

  visitstore() {
    this._bottomSheet.open(OnoffstorehowitworksComponent, {
      panelClass: 'storepage',
      backdropClass: 'storepagehowitworks',
    });
  }
}
