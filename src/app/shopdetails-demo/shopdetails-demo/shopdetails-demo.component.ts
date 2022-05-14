import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatBottomSheet,
  //MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { Page15Component } from 'src/app/components/page15/page15.component';

// import { ProductsPopupComponent } from '../products-popup/products-popup.component';

@Component({
  selector: 'app-shopdetails-demo',
  templateUrl: './shopdetails-demo.component.html',
  styleUrls: ['./shopdetails-demo.component.scss'],
})
export class ShopdetailsDemoComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  accordion: any = 'card1';
  segment: string = 'visit-store';
  showAddToCard: boolean = false;
  openedAccordianLists: any = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _bottomSheet: MatBottomSheet
  ) {}

  openBottomSheet(): void {
    const bS = this._bottomSheet.open(Page15Component, {
      disableClose: false,
      hasBackdrop: true,
      panelClass: '',
      backdropClass: '',
    });
    bS.afterDismissed().subscribe((ref: any) => {
      console.log(ref);
    });
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  showAccordion(value: string) {
    let index = this.openedAccordianLists.indexOf(value);
    if (index === -1) {
      this.openedAccordianLists.push(value);
    } else {
      this.openedAccordianLists.splice(index, 1);
    }
  }

  isAccordianOpen(value: string) {
    let index = this.openedAccordianLists.indexOf(value);
    if (index === -1) {
      return false;
    } else {
      return true;
    }
  }

  changeSegment(segmentValue: string) {
    this.segment = segmentValue;
  }

  showAndHideAddToCard() {
    this.showAddToCard = true;
  }
}
