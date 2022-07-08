import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminburnComponent } from './admin-burn/adminburn/adminburn.component';
import { BurnSectionComponent } from './admin-burn/burn-section/burn-section.component';
import { EditburnproductsComponent } from './admin-burn/editburnproducts/editburnproducts.component';
import { Editburnproducts1Component } from './admin-burn/editburnproducts1/editburnproducts1.component';
import { Admin1Component } from './admin/admin1/admin1.component';
import { Admin2Component } from './admin/admin2/admin2.component';
import { UseroverviewComponent } from './admin/useroverview/useroverview.component';
import { DashboardComponent } from './admindashboard/dashboard/dashboard.component';
import { Header1Component } from './allheaders/header1/header1.component';
import { CampaignComponent } from './campaign/campaign/campaign.component';
import { CategorygroupComponent } from './category/categorygroup/categorygroup.component';
import { BucketlistComponent } from './component/bucketlist/bucketlist.component';
import { BurnnewinComponent } from './component/burnnewin/burnnewin.component';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { ActivewearComponent } from './components/activewear/activewear.component';
import { BottomsupComponent } from './components/bottomsup/bottomsup.component';
import { BurnComponent } from './components/burn/burn.component';
import { BurnproductsComponent } from './components/burnproducts/burnproducts.component';
import { CartComponent } from './components/cart/cart.component';
import { ChooseExchangeitemComponent } from './components/choose-exchangeitem/choose-exchangeitem.component';
import { CongratulationsComponent } from './components/congratulations/congratulations.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { ExchangeOrderComponent } from './components/exchange-order/exchange-order.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FitnessComponent } from './components/fitness/fitness.component';
import { FormPageComponent } from './components/form-page/form-page.component';
import { GatewaycardComponent } from './components/gatewaycard/gatewaycard.component';
import { GatewaycardpopupComponent } from './components/gatewaycardpopup/gatewaycardpopup.component';
import { GeneralInformationComponent } from './components/general-information/general-information.component';
import { GeninfoComponent } from './components/geninfo/geninfo.component';
import { HealthcareComponent } from './components/healthcare/healthcare.component';
import { HomeComponent } from './components/home/home.component';
import { HowitworkbottompopupComponent } from './components/howitworkbottompopup/howitworkbottompopup.component';
import { HowitworksComponent } from './components/howitworks/howitworks.component';
import { InvitecontactsComponent } from './components/invitecontacts/invitecontacts.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { Mk1Component } from './components/mk1/mk1.component';
import { Mk2Component } from './components/mk2/mk2.component';
import { OnFashionComponent } from './components/on-fashion/on-fashion.component';
// import { OnFashionComponent } from './components/on-fashion/on-fashion.component';
import { OrderconfirmationComponent } from './components/orderconfirmation/orderconfirmation.component';
import { OrderconfirmationvocalforlocalComponent } from './components/orderconfirmationvocalforlocal/orderconfirmationvocalforlocal.component';
import { Orderdetail1Component } from './components/orderdetail1/orderdetail1.component';
import { Orderdetail2Component } from './components/orderdetail2/orderdetail2.component';
import { Orderdetail3Component } from './components/orderdetail3/orderdetail3.component';
import { Orderdetail4Component } from './components/orderdetail4/orderdetail4.component';
import { Orderdetail5Component } from './components/orderdetail5/orderdetail5.component';
import { Orderdetail6Component } from './components/orderdetail6/orderdetail6.component';
import { OrderdetailsComponent } from './components/orderdetails/orderdetails.component';
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
import { ProductdeliverComponent } from './components/productdeliver/productdeliver.component';
import { ProductsPopupComponent } from './components/products-popup/products-popup.component';
import { RefillComponent } from './components/refill/refill.component';
import { RefrcashComponent } from './components/refrcash/refrcash.component';
import { ReplacedetailsComponent } from './components/replacedetails/replacedetails.component';
import { Replacedetails2Component } from './components/replacedetails2/replacedetails2.component';
import { ReplaceitemsComponent } from './components/replaceitems/replaceitems.component';
import { SalonSpaComponent } from './components/salon-spa/salon-spa.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ShopDetailsComponent } from './components/shop-details/shop-details.component';
import { OfflinestoreComponent } from './components/termsnconditions/offlinestore/offlinestore.component';
import { OnlineofflineconditionsComponent } from './components/termsnconditions/onlineofflineconditions/onlineofflineconditions.component';
import { OnlinestoreconditionsComponent } from './components/termsnconditions/onlinestoreconditions/onlinestoreconditions.component';
import { ThankyouscreenComponent } from './components/thankyouscreen/thankyouscreen.component';
import { WalletscreenComponent } from './components/walletscreen/walletscreen.component';
import { MaindashboardComponent } from './dashboard/maindashboard/maindashboard.component';
import { CpComponent } from './delete/cp/cp.component';
import { PqrComponent } from './delete/pqr/pqr.component';
import { BucketdemoComponent } from './demo/bucketdemo/bucketdemo.component';
import { BurnabcComponent } from './demo/burnabc/burnabc.component';
import { DemoadminComponent } from './demo/demoadmin/demoadmin.component';
import { OrderconfirmemailComponent } from './emailtemplates/orderconfirmemail/orderconfirmemail.component';
import { TickComponent } from './greentickanimation/tick/tick.component';
import { BeautyproductComponent } from './homecategoriesproducts/beautyproduct/beautyproduct.component';
import { FoodproductComponent } from './homecategoriesproducts/foodproduct/foodproduct.component';
import { PetcareComponent } from './homecategoriesproducts/petcare/petcare.component';
import { HomescreenheaderComponent } from './homescreen/homescreenheader/homescreenheader.component';
import { HomescreenwithbackComponent } from './homescreenheaderback/homescreenwithback/homescreenwithback.component';
import { BurncashComponent } from './howitworkssection/burncash/burncash.component';
import { Cashback2xComponent } from './howitworkssection/cashback2x/cashback2x.component';
import { GrowcommunityComponent } from './howitworkssection/growcommunity/growcommunity.component';
import { OnerefrcashComponent } from './howitworkssection/onerefrcash/onerefrcash.component';
import { RefrcreatorComponent } from './howitworkssection/refrcreator/refrcreator.component';
import { RefrlevelsComponent } from './howitworkssection/refrlevels/refrlevels.component';
import { StartedrefrComponent } from './howitworkssection/startedrefr/startedrefr.component';
import { ThreeeasystepsComponent } from './howitworkssection/threeeasysteps/threeeasysteps.component';
import { VocallocalComponent } from './howitworkssection/vocallocal/vocallocal.component';
import { RedeemofflineComponent } from './howtoredeem/redeemoffline/redeemoffline.component';
import { RedeemonlineComponent } from './howtoredeem/redeemonline/redeemonline.component';
import { LevelsectionComponent } from './Levels/levelsection/levelsection.component';
import { MerchantTransactionComponent } from './merchant-transaction/merchant-transaction/merchant-transaction.component';
import { AdminPanelComponent } from './merchant/admin-panel/admin-panel.component';
import { CreateProductComponent } from './merchant/create-product/create-product.component';
import { CreateProfileComponent } from './merchant/create-profile/create-profile.component';
import { EditProductComponent } from './merchant/edit-product/edit-product.component';
import { EditProfileComponent } from './merchant/edit-profile/edit-profile.component';
import { EditsectionComponent } from './merchant/editsection/editsection.component';
import { MerchantDashComponent } from './merchant/merchant-dash/merchant-dash.component';
import { ProfileviewComponent } from './merchant/profileview/profileview.component';
import { ViewdetailsComponent } from './merchant/viewdetails/viewdetails.component';
import { OfflineStoreComponent } from './online-offlinestores/offline-store/offline-store.component';
import { OnlineOfflineComponent } from './online-offlinestores/online-offline/online-offline.component';
import { OnlineStoreComponent } from './online-offlinestores/online-store/online-store.component';
import { OrdersectionComponent } from './orders-section/ordersection/ordersection.component';
import { RefrtransactionComponent } from './refr-transaction/refrtransaction/refrtransaction.component';
import { CustomercodeComponent } from './roshan/customercode/customercode.component';
import { ShopdetailsDemoComponent } from './shopdetails-demo/shopdetails-demo/shopdetails-demo.component';
import { ShopdetailsComponent } from './shopdetails/shopdetails/shopdetails.component';
import { ShoptermnconditionComponent } from './shopdetails/shoptermncondition/shoptermncondition.component';
import { StoreoverviewComponent } from './storeoverview/storeoverview/storeoverview.component';
import { StoresComponent } from './stores/stores/stores.component';
import { SubcategoryComponent } from './subcategory/subcategory/subcategory.component';
import { TableComponent } from './table/table.component';
import { NewtransactionComponent } from './user-transaction/newtransaction/newtransaction.component';
import { TransactionusersComponent } from './user-transaction/transactionusers/transactionusers.component';
import { UserViewallComponent } from './users/user-viewall/user-viewall.component';
import { UserdashComponent } from './users/userdash/userdash.component';
import { UserprofileviewComponent } from './users/userprofileview/userprofileview.component';
import { WithdrawrequestComponent } from './withdraw/withdrawrequest/withdrawrequest.component';
import { WithdrawupdateComponent } from './withdraw/withdrawupdate/withdrawupdate/withdrawupdate.component';
import { WithdrawviewComponent } from './withdraw/withdrawview/withdrawview/withdrawview.component';

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
  { path: 'orderpages', component: Page15Component },
  { path: 'page16', component: Page16Component },
  { path: 'page17', component: Page17Component },
  { path: 'hottestdeals', component: Page18Component },
  { path: 'login', component: LoginSignupComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'loginpage', component: LoginpageComponent },
  { path: 'restaurants', component: Page14Component },
  { path: 'fashion', component: OnFashionComponent },
  { path: 'spa', component: SalonSpaComponent },
  { path: 'health', component: HealthcareComponent },
  { path: 'fitness', component: FitnessComponent },
  { path: 'electronic', component: ElectronicsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'refill', component: RefillComponent },
  { path: 'refrcash', component: RefrcashComponent },
  { path: 'productpopup', component: ProductsPopupComponent },
  { path: 'shopdetails', component: ShopDetailsComponent },
  { path: 'orderdetails', component: OrderdetailsComponent },
  { path: 'od1', component: Orderdetail1Component },
  { path: 'od2', component: Orderdetail2Component },
  { path: 'od3', component: Orderdetail3Component },
  { path: 'od4', component: Orderdetail4Component },
  { path: 'od5', component: Orderdetail5Component },
  { path: 'od6', component: Orderdetail6Component },
  { path: 'reqformdemo', component: FormPageComponent },
  { path: 'exchangeorder', component: ExchangeOrderComponent },
  { path: 'gatewaypopup', component: GatewaycardpopupComponent },
  { path: 'wallet', component: WalletscreenComponent },
  // { path: 'gateway', component: GatewaycardComponent },
  { path: 'howitworks', component: HowitworksComponent },
  { path: 'home', component: HomeComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'congrats', component: CongratulationsComponent },

  // burn-----------------------------
  { path: 'burn', component: BurnComponent },
  { path: 'burnproduct', component: BurnproductsComponent },
  { path: 'accessories', component: AccessoriesComponent },
  { path: 'bucketlist', component: BucketlistComponent },
  { path: 'burnnew', component: BurnnewinComponent },
  { path: 'burnabc', component: BurnabcComponent },
  // { path: 'bucketdemo', component: BucketdemoComponent },

  //

  { path: 'tick', component: TickComponent },
  { path: 'admin', component: AdminPanelComponent },
  { path: 'makeitright', component: ChooseExchangeitemComponent },
  { path: 'mk1', component: Mk1Component },
  { path: 'mk2', component: Mk2Component },
  { path: 'replacedetails', component: ReplacedetailsComponent },
  { path: 'replacedetails2', component: Replacedetails2Component },
  { path: 'bb', component: BottomsupComponent },
  { path: 'howitworkpopup', component: HowitworkbottompopupComponent },
  { path: 'offlinestore', component: OfflineStoreComponent },
  { path: 'onlinestore', component: OnlineStoreComponent },
  { path: 'onoff', component: OnlineOfflineComponent },
  { path: 'admin1', component: Admin1Component },
  { path: 'admin2', component: Admin2Component },
  { path: 'table', component: TableComponent },
  { path: 'tncofflinestore', component: OfflinestoreComponent },
  { path: 'tnconlinestore', component: OnlinestoreconditionsComponent },
  { path: 'tnonoff', component: OnlineofflineconditionsComponent },
  { path: 'thankyou', component: ThankyouscreenComponent },
  { path: 'stores', component: StoresComponent },
  { path: 'levels', component: LevelsectionComponent },

  // how to redeem
  { path: 'redeemoffline', component: RedeemofflineComponent },
  { path: 'redeemonline', component: RedeemonlineComponent },

  // shop terms condition

  { path: 'shopterm', component: ShoptermnconditionComponent },

  { path: 'generalinfo', component: GeneralInformationComponent },
  { path: 'geninfo', component: GeninfoComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'productdeliver', component: ProductdeliverComponent },
  // { path: 'invtecontact', component: InvitecontactsComponent },

  // -------------- All Headders
  { path: 'h1', component: Header1Component },

  // -------------homescreen------------
  { path: 'homescreen1', component: HomescreenheaderComponent },
  { path: 'homescreenback', component: HomescreenwithbackComponent },

  // homecategorys -----------------------
  { path: 'foodproducts', component: FoodproductComponent },
  { path: 'petcare', component: PetcareComponent },
  { path: 'beauty', component: BeautyproductComponent },

  // shopscreen starts-----------
  { path: 'sddemo', component: ShopdetailsDemoComponent },
  { path: 'shopdetails1', component: ShopdetailsComponent },
  // shopscreen ends-----------

  // order confirmations screens starts-----------
  { path: 'orderconfirm', component: OrderconfirmationComponent },
  { path: 'ocvocallocal', component: OrderconfirmationvocalforlocalComponent },

  // order confirmations screens ends-----------

  // ==============merchant
  { path: 'merchantdash', component: MerchantDashComponent },
  { path: 'createprofile', component: CreateProfileComponent },
  { path: 'editprofile', component: EditProfileComponent },
  { path: 'pqr', component: PqrComponent },
  { path: 'createproduct', component: CreateProductComponent },
  { path: 'editproduct', component: EditProductComponent },
  { path: 'profileview', component: ProfileviewComponent },
  { path: 'viewdetails', component: ViewdetailsComponent },

  // ==============users

  { path: 'userdash', component: UserdashComponent },
  { path: 'userprofile', component: UserprofileviewComponent },
  { path: 'userview', component: UserViewallComponent },

  // ==============orders
  { path: 'ordersection', component: OrdersectionComponent },

  // ==============campaign
  { path: 'campaign', component: CampaignComponent },

  // ============== transaction
  { path: 'merchanttrans', component: MerchantTransactionComponent },
  { path: 'usertrans', component: TransactionusersComponent },
  { path: 'withdraw', component: WithdrawrequestComponent },
  { path: 'viewwithdraw', component: WithdrawviewComponent },
  { path: 'updatewithdraw', component: WithdrawupdateComponent },
  { path: 'refrtrans', component: RefrtransactionComponent },
  { path: 'newtrans', component: NewtransactionComponent },

  // -----------category

  { path: 'categorygroup', component: CategorygroupComponent },
  { path: 'subcategory', component: SubcategoryComponent },

  // --------------------admin-dashboard

  { path: 'admindash', component: DashboardComponent },
  { path: 'maindash', component: MaindashboardComponent },

  // ---------------adminburn

  { path: 'adminburn', component: AdminburnComponent },
  { path: 'editburn', component: EditburnproductsComponent },
  { path: 'editburn1', component: Editburnproducts1Component },
  { path: 'burnsection', component: BurnSectionComponent },

  // -------------------demoadmin

  { path: 'demoadmin', component: DemoadminComponent },

  // demo

  { path: 'easysteps', component: ThreeeasystepsComponent },
  { path: 'grow', component: GrowcommunityComponent },
  { path: 'started', component: StartedrefrComponent },
  { path: 'cashback', component: Cashback2xComponent },
  { path: 'vocallocal', component: VocallocalComponent },
  { path: 'onerefrcash', component: OnerefrcashComponent },
  { path: 'refrlevels', component: RefrlevelsComponent },
  { path: 'refrcreator', component: RefrcreatorComponent },
  { path: 'burncash', component: BurncashComponent },
  // lazy loading
  {
    path: 'howitworksection',
    loadChildren: () =>
      import('./howitworkssection/howitworks.module').then(
        (mod) => mod.HowitworksModule
      ),
  },

  // dipesh work starts ===============================================
  { path: 'storeoverview', component: StoreoverviewComponent },
  { path: 'useroverview', component: UseroverviewComponent },
  // dipesh work ends ===============================================

  // roshan code

  { path: 'customercontact', component: CustomercodeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
