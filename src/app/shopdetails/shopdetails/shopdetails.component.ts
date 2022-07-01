import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { OnlinestoreconditionsComponent } from 'src/app/components/termsnconditions/onlinestoreconditions/onlinestoreconditions.component';
import { StorepageshopsComponent } from '../storepageshops/storepageshops.component';

@Component({
  selector: 'app-shopdetails',
  templateUrl: './shopdetails.component.html',
  styleUrls: ['./shopdetails.component.scss'],
})
export class ShopdetailsComponent implements OnInit {
  show = false;
  constructor(
    private dialog: MatDialog,
    private _bottomSheet: MatBottomSheet
  ) {}
  //

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
    this._bottomSheet.open(OnlinestoreconditionsComponent);
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
      this.viewTyp = 'Offline';
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
}
