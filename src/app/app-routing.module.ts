import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { FitnessComponent } from './components/fitness/fitness.component';
import { HealthcareComponent } from './components/healthcare/healthcare.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { OnFashionComponent } from './components/on-fashion/on-fashion.component';
import { OtpComponent } from './components/otp/otp.component';
import { Page1Component } from './components/page1/page1.component';
import { Page10Component } from './components/page10/page10.component';
import { Page11Component } from './components/page11/page11.component';
import { Page12Component } from './components/page12/page12.component';
import { Page13Component } from './components/page13/page13.component';
import { Page14Component } from './components/page14/page14.component';
import { Page15Component } from './components/page15/page15.component';
import { Page16Component } from './components/page16/page16.component';
import { Page17Component } from './components/page17/page17.component';
import { Page18Component } from './components/page18/page18.component';
import { Page2Component } from './components/page2/page2.component';
import { Page3Component } from './components/page3/page3.component';
import { Page4Component } from './components/page4/page4.component';
import { Page5Component } from './components/page5/page5.component';
import { Page6Component } from './components/page6/page6.component';
import { Page7Component } from './components/page7/page7.component';
import { Page8Component } from './components/page8/page8.component';
import { Page9Component } from './components/page9/page9.component';
import { ProductsPopupComponent } from './components/products-popup/products-popup.component';
import { RefillComponent } from './components/refill/refill.component';
import { RefrcashComponent } from './components/refrcash/refrcash.component';
import { SalonSpaComponent } from './components/salon-spa/salon-spa.component';

const routes: Routes = [
  { path: '', redirectTo: '/page1', pathMatch: 'full' },
  { path: 'page1', component: Page1Component },
  { path: 'myprofile', component: Page2Component },
  { path: 'profiledetails', component: Page3Component },
  { path: 'manageaddress', component: Page4Component },
  { path: 'manageadd', component: Page5Component },
  { path: 'orders', component: Page6Component },
  { path: 'paymentmethods', component: Page7Component },
  { path: 'page8', component: Page8Component },
  { path: 'products', component: Page9Component },
  { path: 'wishlists', component: Page10Component },
  { path: 'customersupports', component: Page11Component },
  { path: 'notifications', component: Page12Component },
  { path: 'orderss', component: Page13Component },
  { path: 'address', component: Page14Component },
  { path: 'orderpages', component: Page15Component },
  { path: 'page16', component: Page16Component },
  { path: 'page17', component: Page17Component },
  { path: 'hottestdeals', component: Page18Component },
  { path: 'login', component: LoginSignupComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'loginpage', component: LoginpageComponent },
  { path: 'fashion', component: OnFashionComponent },
  { path: 'spa', component: SalonSpaComponent },
  { path: 'health', component: HealthcareComponent },
  { path: 'fitness', component: FitnessComponent },
  { path: 'electronic', component: ElectronicsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'refill', component: RefillComponent },
  { path: 'refrcash', component: RefrcashComponent },
  { path: 'productpopup', component: ProductsPopupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
