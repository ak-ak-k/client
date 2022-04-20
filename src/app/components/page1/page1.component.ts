import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginSignupComponent } from '../login-signup/login-signup.component';
import { OtpComponent } from '../otp/otp.component';
import { Page15Component } from '../page15/page15.component';
import { RefrcashComponent } from '../refrcash/refrcash.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { DialogXComponent } from './dialog-x/dialog-x.component';
import { ManageAddressComponent } from './manage-address/manage-address.component';
import { MyprofileComponent } from './myprofile/myprofile.component';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
})
export class Page1Component implements OnInit {
  constructor(private dialog: MatDialog) {}

  get getHeight() {
    return window.innerHeight;
  }
  get getWidth() {
    return window.innerWidth;
  }

  ngOnInit(): void {}

  cart() {
    let isPhone = this.getWidth < 768;
    let w = isPhone ? this.getWidth + 'px' : '480px';
    let h = isPhone ? this.getHeight + 'px' : '98vh';
    const refDialog = this.dialog.open(DialogXComponent, {
      width: w,
      minWidth: '320px',
      maxWidth: '480px',
      height: h,
      hasBackdrop: true,
      disableClose: false,
      panelClass: 'dialogLayout', //, autoFocus:false
    });
    refDialog.afterClosed().subscribe(() => {});
  }

  myprofile() {
    let isPhone = this.getWidth < 768;
    let w = isPhone ? this.getWidth + 'px' : '480px';
    let h = isPhone ? this.getHeight + 'px' : '98vh';
    const profile = this.dialog.open(MyprofileComponent, {
      width: w,
      minWidth: '320px',
      maxWidth: '480px',
      height: h,
      hasBackdrop: true,
      disableClose: false,
      panelClass: 'dialogLayout', //, autoFocus:false
    });
    profile.afterClosed().subscribe(() => {});
  }

  manageaddress() {
    let isPhone = this.getWidth < 768;
    let w = isPhone ? this.getWidth + 'px' : '480px';
    let h = isPhone ? this.getHeight + 'px' : '98vh';
    const profile = this.dialog.open(ManageAddressComponent, {
      width: w,
      minWidth: '320px',
      maxWidth: '480px',
      height: h,
      hasBackdrop: true,
      disableClose: false,
      panelClass: 'dialogLayout', //, autoFocus:false
    });
    profile.afterClosed().subscribe(() => {});
  }

  addaddress() {
    let isPhone = this.getWidth < 768;
    let w = isPhone ? this.getWidth + 'px' : '480px';
    let h = isPhone ? this.getHeight + 'px' : '98vh';
    const profile = this.dialog.open(AddAddressComponent, {
      width: w,
      minWidth: '320px',
      maxWidth: '480px',
      height: h,
      hasBackdrop: true,
      disableClose: false,
      panelClass: 'dialogLayout', //, autoFocus:false
    });
    profile.afterClosed().subscribe(() => {});
  }

  productpage() {
    let isPhone = this.getWidth < 768;
    let w = isPhone ? this.getWidth + 'px' : '480px';
    let h = isPhone ? this.getHeight + 'px' : '98vh';
    const profile = this.dialog.open(Page15Component, {
      width: w,
      minWidth: '320px',
      maxWidth: '480px',
      height: h,
      hasBackdrop: true,
      disableClose: false,
      panelClass: 'dialogLayout', //, autoFocus:false
    });
    profile.afterClosed().subscribe(() => {});
  }
  loginPage() {
    let isPhone = this.getWidth < 768;
    let w = isPhone ? this.getWidth + 'px' : '480px';
    let h = isPhone ? this.getHeight + 'px' : '98vh';
    const profile = this.dialog.open(LoginSignupComponent, {
      width: w,
      minWidth: '320px',
      maxWidth: '480px',
      height: h,
      hasBackdrop: true,
      disableClose: false,
      panelClass: 'dialogLayout', //, autoFocus:false
    });
    profile.afterClosed().subscribe(() => {});
  }

  otp() {
    let isPhone = this.getWidth < 768;
    let w = isPhone ? this.getWidth + 'px' : '480px';
    let h = isPhone ? this.getHeight + 'px' : '98vh';
    const profile = this.dialog.open(OtpComponent, {
      width: w,
      minWidth: '320px',
      maxWidth: '480px',
      height: h,
      hasBackdrop: true,
      disableClose: false,
      panelClass: 'dialogLayout', //, autoFocus:false
    });
    profile.afterClosed().subscribe(() => {});
  }

  refrcash() {
    let isPhone = this.getWidth < 768;
    let w = isPhone ? this.getWidth + 'px' : '480px';
    let h = isPhone ? this.getHeight + 'px' : '98vh';
    const profile = this.dialog.open(RefrcashComponent, {
      width: w,
      minWidth: '250px',
      maxWidth: '320px',
      height: h,
      hasBackdrop: true,
      disableClose: false,
      panelClass: 'dialogLayout', //, autoFocus:false
    });
    profile.afterClosed().subscribe(() => {});
  }
}
