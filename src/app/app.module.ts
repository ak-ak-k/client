import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';

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
// import { OnFashionComponent } from './components/on-fashion/on-fashion.component';
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
import { GatewaycardComponent } from './components/gatewaycard/gatewaycard.component';
import { GatewaycardpopupComponent } from './components/gatewaycardpopup/gatewaycardpopup.component';
import { WalletscreenComponent } from './components/walletscreen/walletscreen.component';
import { AdvocaseyComponent } from './components/advocasey/advocasey.component';

import { HomeComponent } from './components/home/home.component';
import { BurnComponent } from './components/burn/burn.component';
import { DemogatewayComponent } from './components/demogateway/demogateway.component';
import { DemoadvocaseyComponent } from './components/demoadvocasey/demoadvocasey.component';
import { BurnproductsComponent } from './components/burnproducts/burnproducts.component';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { HowitworksComponent } from './components/howitworks/howitworks.component';
import { OrderconfirmationComponent } from './components/orderconfirmation/orderconfirmation.component';
import { TickComponent } from './greentickanimation/tick/tick.component';
import { AdminPanelComponent } from './merchant/admin-panel/admin-panel.component';
import { FooterComponent } from './footer/footer/footer.component';
import { ChooseExchangeitemComponent } from './components/choose-exchangeitem/choose-exchangeitem.component';
import { ExchangeProductComponent } from './components/exchange-product/exchange-product.component';
import { Mk1Component } from './components/mk1/mk1.component';
import { Mk2Component } from './components/mk2/mk2.component';
import { ReplacedetailsComponent } from './components/replacedetails/replacedetails.component';
import { Replacedetails2Component } from './components/replacedetails2/replacedetails2.component';
import { DelivereyComponent } from './components/deliverey/deliverey.component';
import { ShopdetailsDemoComponent } from './shopdetails-demo/shopdetails-demo/shopdetails-demo.component';
import { HowitworkbottompopupComponent } from './components/howitworkbottompopup/howitworkbottompopup.component';
import { BottomsupComponent } from './components/bottomsup/bottomsup.component';
import { OfflineStoreComponent } from './online-offlinestores/offline-store/offline-store.component';
import { OnlineOfflineHeaderComponent } from './online-offlinestores/online-offline-header/online-offline-header.component';
import { OnlineStoreComponent } from './online-offlinestores/online-store/online-store.component';
import { OnlineOfflineComponent } from './online-offlinestores/online-offline/online-offline.component';
import { Admin1Component } from './admin/admin1/admin1.component';
import { Admin2Component } from './admin/admin2/admin2.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MerchantDashComponent } from './merchant/merchant-dash/merchant-dash.component';
import { MerchantHeaderComponent } from './merchant/merchant-header/merchant-header.component';
import { CreateProfileComponent } from './merchant/create-profile/create-profile.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PqrComponent } from './delete/pqr/pqr.component';
import { CpComponent } from './delete/cp/cp.component';
import { CreateProductComponent } from './merchant/create-product/create-product.component';
import { EditProfileComponent } from './merchant/edit-profile/edit-profile.component';
import { EditProductComponent } from './merchant/edit-product/edit-product.component';
import { EditsectionComponent } from './merchant/editsection/editsection.component';
import { ViewdetailsComponent } from './merchant/viewdetails/viewdetails.component';
import { ProfileSummaryComponent } from './merchant/profile-summary/profile-summary.component';
import { ProfileviewComponent } from './merchant/profileview/profileview.component';
import { ProfilewalletsComponent } from './merchant/profilewallets/profilewallets.component';
import { TransactionhistoryComponent } from './merchant/transactionhistory/transactionhistory.component';
import { UserdashComponent } from './users/userdash/userdash.component';
import { UserprofileviewComponent } from './users/userprofileview/userprofileview.component';
import { BankingdetailsComponent } from './users/bankingdetails/bankingdetails.component';
import { UserodersComponent } from './users/useroders/useroders.component';
import { UserwalletComponent } from './users/userwallet/userwallet.component';
import { UsertranscationComponent } from './users/usertranscation/usertranscation.component';
import { UserViewallComponent } from './users/user-viewall/user-viewall.component';
import { LevelsStoreShareComponent } from './users/levels-store-share/levels-store-share.component';
import { LevelsRecommendComponent } from './users/levels-recommend/levels-recommend.component';
import { OrdersectionComponent } from './orders-section/ordersection/ordersection.component';
import { CampaignComponent } from './campaign/campaign/campaign.component';
import { CampaigncustomComponent } from './campaign/campaigncustom/campaigncustom.component';
import { MerchantTransactionComponent } from './merchant-transaction/merchant-transaction/merchant-transaction.component';
import { TransactionusersComponent } from './user-transaction/transactionusers/transactionusers.component';
import { WithdrawrequestComponent } from './withdraw/withdrawrequest/withdrawrequest.component';
import { WithdrawviewComponent } from './withdraw/withdrawview/withdrawview/withdrawview.component';
import { WithdrawupdateComponent } from './withdraw/withdrawupdate/withdrawupdate/withdrawupdate.component';
import { RefrtransactionComponent } from './refr-transaction/refrtransaction/refrtransaction.component';
import { CategorygroupComponent } from './category/categorygroup/categorygroup.component';
import { AddcategoryComponent } from './category/addcategory/addcategory.component';
import { UpdatecategoryComponent } from './category/updatecategory/updatecategory.component';
import { SubcategoryComponent } from './subcategory/subcategory/subcategory.component';
import { AddsubcategoryComponent } from './subcategory/addsubcategory/addsubcategory.component';
import { UpdatesubcategoryComponent } from './subcategory/updatesubcategory/updatesubcategory.component';
import { DashboardComponent } from './admindashboard/dashboard/dashboard.component';
import { RecentusersComponent } from './admindashboard/recentusers/recentusers.component';
import { RecentcampaignsComponent } from './admindashboard/recentcampaigns/recentcampaigns.component';
import { AdminburnComponent } from './admin-burn/adminburn/adminburn.component';
import { ExculsiveproductsComponent } from './admin-burn/exculsiveproducts/exculsiveproducts.component';
import { MaindashboardComponent } from './dashboard/maindashboard/maindashboard.component';
import { EditburnproductsComponent } from './admin-burn/editburnproducts/editburnproducts.component';
import { Editburnproducts1Component } from './admin-burn/editburnproducts1/editburnproducts1.component';
import { DemoadminComponent } from './demo/demoadmin/demoadmin.component';
import { BurnSectionComponent } from './admin-burn/burn-section/burn-section.component';
import { TableComponent } from './table/table.component';
import { OnFashionComponent } from './components/on-fashion/on-fashion.component';
import { OfflinestoreComponent } from './components/termsnconditions/offlinestore/offlinestore.component';
import { OnlinestoreconditionsComponent } from './components/termsnconditions/onlinestoreconditions/onlinestoreconditions.component';
import { OnlineofflineconditionsComponent } from './components/termsnconditions/onlineofflineconditions/onlineofflineconditions.component';
import { ThankyouscreenComponent } from './components/thankyouscreen/thankyouscreen.component';
import { StoresComponent } from './stores/stores/stores.component';
import { GeneralInformationComponent } from './components/general-information/general-information.component';
import { GeninfoComponent } from './components/geninfo/geninfo.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { InvitecontactsComponent } from './components/invitecontacts/invitecontacts.component';
import { OrderconfirmationvocalforlocalComponent } from './components/orderconfirmationvocalforlocal/orderconfirmationvocalforlocal.component';
import { Deliverycomponent2Component } from './components/deliverycomponent2/deliverycomponent2.component';
import { NewtransactionComponent } from './user-transaction/newtransaction/newtransaction.component';

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
    // OnFashionComponent,
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
    GatewaycardComponent,
    GatewaycardpopupComponent,
    WalletscreenComponent,
    AdvocaseyComponent,
    HomeComponent,
    BurnComponent,
    DemogatewayComponent,
    DemoadvocaseyComponent,
    BurnproductsComponent,
    AccessoriesComponent,
    HowitworksComponent,
    OrderconfirmationComponent,
    TickComponent,
    AdminPanelComponent,
    FooterComponent,
    ChooseExchangeitemComponent,
    ExchangeProductComponent,
    Mk1Component,
    Mk2Component,
    ReplacedetailsComponent,
    Replacedetails2Component,
    DelivereyComponent,
    ShopdetailsDemoComponent,
    HowitworkbottompopupComponent,
    BottomsupComponent,
    OfflineStoreComponent,
    OnlineOfflineHeaderComponent,
    OnlineStoreComponent,
    OnlineOfflineComponent,
    Admin1Component,
    Admin2Component,
    MerchantDashComponent,
    MerchantHeaderComponent,
    CreateProfileComponent,
    PqrComponent,
    CpComponent,
    CreateProductComponent,
    EditProfileComponent,
    EditProductComponent,
    EditsectionComponent,
    ViewdetailsComponent,
    ProfileSummaryComponent,
    ProfileviewComponent,
    ProfilewalletsComponent,
    TransactionhistoryComponent,
    UserdashComponent,
    UserprofileviewComponent,
    BankingdetailsComponent,
    UserodersComponent,
    UserwalletComponent,
    UsertranscationComponent,
    UserViewallComponent,
    LevelsStoreShareComponent,
    LevelsRecommendComponent,
    OrdersectionComponent,
    CampaignComponent,
    CampaigncustomComponent,
    MerchantTransactionComponent,
    TransactionusersComponent,
    WithdrawrequestComponent,
    WithdrawviewComponent,
    WithdrawupdateComponent,
    RefrtransactionComponent,
    CategorygroupComponent,
    AddcategoryComponent,
    UpdatecategoryComponent,
    SubcategoryComponent,
    AddsubcategoryComponent,
    UpdatesubcategoryComponent,
    DashboardComponent,
    RecentusersComponent,
    RecentcampaignsComponent,
    AdminburnComponent,
    ExculsiveproductsComponent,
    MaindashboardComponent,
    EditburnproductsComponent,
    Editburnproducts1Component,
    DemoadminComponent,
    BurnSectionComponent,
    TableComponent,
    OnFashionComponent,
    OfflinestoreComponent,
    OnlinestoreconditionsComponent,
    OnlineofflineconditionsComponent,
    ThankyouscreenComponent,
    StoresComponent,
    GeneralInformationComponent,
    GeninfoComponent,
    FeedbackComponent,
    InvitecontactsComponent,
    OrderconfirmationvocalforlocalComponent,
    Deliverycomponent2Component,
    NewtransactionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
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
    MatPaginatorModule,
    MatTableModule,
    MatTabsModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
