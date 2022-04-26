import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';

// use this

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';

import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { Page3Component } from './components/page3/page3.component';
import { Page4Component } from './components/page4/page4.component';
import { Page5Component } from './components/page5/page5.component';
import { DialogXComponent } from './components/page1/dialog-x/dialog-x.component';
import { MyprofileComponent } from './components/page1/myprofile/myprofile.component';
import { MatNativeDateModule } from '@angular/material/core';
import { ManageAddressComponent } from './components/page1/manage-address/manage-address.component';
import { AddAddressComponent } from './components/page1/add-address/add-address.component';
import { Page6Component } from './components/page6/page6.component';
import { Page7Component } from './components/page7/page7.component';
import { Page8Component } from './components/page8/page8.component';
import { Page9Component } from './components/page9/page9.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Page10Component } from './components/page10/page10.component';
import { Page11Component } from './components/page11/page11.component';
import { Page12Component } from './components/page12/page12.component';
import { Page13Component } from './components/page13/page13.component';
import { Page14Component } from './components/page14/page14.component';
import { Page15Component } from './components/page15/page15.component';
import { Page16Component } from './components/page16/page16.component';
import { Page17Component } from './components/page17/page17.component';
import { Page18Component } from './components/page18/page18.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { OtpComponent } from './components/otp/otp.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { OnFashionComponent } from './components/on-fashion/on-fashion.component';
import { SalonSpaComponent } from './components/salon-spa/salon-spa.component';
import { HealthcareComponent } from './components/healthcare/healthcare.component';
import { FitnessComponent } from './components/fitness/fitness.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { CartComponent } from './components/cart/cart.component';
import { RefillComponent } from './components/refill/refill.component';
import { RefrcashComponent } from './components/refrcash/refrcash.component';
import { Refrcash1Component } from './components/refrcash1/refrcash1.component';
import { Refrcash2Component } from './components/refrcash2/refrcash2.component';
import { ProductsPopupComponent } from './components/products-popup/products-popup.component';
import { ShopDetailsComponent } from './components/shop-details/shop-details.component';
import { OrderdetailsComponent } from './components/orderdetails/orderdetails.component';
import { Orderdetail1Component } from './components/orderdetail1/orderdetail1.component';
import { Orderdetail2Component } from './components/orderdetail2/orderdetail2.component';
import { Orderdetail3Component } from './components/orderdetail3/orderdetail3.component';
import { Orderdetail4Component } from './components/orderdetail4/orderdetail4.component';
import { Orderdetail5Component } from './components/orderdetail5/orderdetail5.component';
import { Orderdetail6Component } from './components/orderdetail6/orderdetail6.component';
import { FormPageComponent } from './components/form-page/form-page.component';
import { RefrFormComponent } from './components/refr-form/refr-form.component';
import { ReturnreplacedialogComponent } from './components/returnreplacedialog/returnreplacedialog.component';
import { ReturnitemsComponent } from './components/returnitems/returnitems.component';
import { ReplaceitemsComponent } from './components/replaceitems/replaceitems.component';
import { ExchangeOrderComponent } from './components/exchange-order/exchange-order.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,
    DialogXComponent,
    MyprofileComponent,
    ManageAddressComponent,
    AddAddressComponent,
    Page6Component,
    Page7Component,
    Page8Component,
    Page9Component,
    Page10Component,
    Page11Component,
    Page12Component,
    Page13Component,
    Page14Component,
    Page15Component,
    Page16Component,
    Page17Component,
    Page18Component,
    LoginSignupComponent,
    OtpComponent,
    LoginpageComponent,
    OnFashionComponent,
    SalonSpaComponent,
    HealthcareComponent,
    FitnessComponent,
    ElectronicsComponent,
    CartComponent,
    RefillComponent,
    RefrcashComponent,
    Refrcash1Component,
    Refrcash2Component,
    ProductsPopupComponent,
    ShopDetailsComponent,
    OrderdetailsComponent,
    Orderdetail1Component,
    Orderdetail2Component,
    Orderdetail3Component,
    Orderdetail4Component,
    Orderdetail5Component,
    Orderdetail6Component,
    FormPageComponent,
    RefrFormComponent,
    ReturnreplacedialogComponent,
    ReturnitemsComponent,
    ReplaceitemsComponent,
    ExchangeOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatFormFieldModule,

    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatMenuModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
