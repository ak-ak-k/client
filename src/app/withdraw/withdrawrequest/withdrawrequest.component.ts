import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { WithdrawupdateComponent } from '../withdrawupdate/withdrawupdate/withdrawupdate.component';
import { WithdrawviewComponent } from '../withdrawview/withdrawview/withdrawview.component';

export interface UserData {
  oid: string;
  name: string;
  phone: string;
  Email: string;
  Amount: string;
  withdraw_status: string;
  payout_status: string;
  bank_details: string;

  Date: string;
  action: string;
}

@Component({
  selector: 'app-withdrawrequest',
  templateUrl: './withdrawrequest.component.html',
  styleUrls: ['./withdrawrequest.component.scss'],
})
export class WithdrawrequestComponent implements OnInit {
  //

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  //

  selected = 'option2';

  displayedColumns: string[] = [
    'oid',
    'name',
    'phone',
    'Email',
    'Amount',
    'withdraw_status',
    'payout_status',
    'bank_details',
    'Date',
    'action',
  ];
  dataSource!: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    setTimeout(() => {
      this.execute();
    }, 1000);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  execute() {
    const users = [
      {
        oid: '1234567890',
        name: 'Dent Heal',
        phone: '1234567890',
        Email: 'BrijMohu@gmail.com',
        Amount: '5126',
        withdraw_status: 'Pending',
        payout_status: 'Completed',
        bank_details: 'Completed',

        Date: '16/05/2022',
        action: 'yes',
      },
    ];
    this.dataSource = new MatTableDataSource(users);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // this.auth.getStoreList(100).subscribe((users: any) => {
    //   console.log('List: ', users);
    //   this.dataSource = new MatTableDataSource(users);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // });
  }

  //

  toppings = new FormControl();

  categories: string[] = [
    'Fashion',
    'Food & Beverages',
    'Salon & Spas',
    'Beauty & Grooming',
    'Electronics',
    'Health',
    'Fitness',
    'Grocery',
    'Pet Store',
    'Pharmacy',
    'Home',
    'Mom & baby',
  ];

  sub_cat = new FormControl();

  sub_catlist: string[] = ['Men', 'Women', 'Kids', 'Footwear', 'Accessories'];

  state = new FormControl();

  state_list: string[] = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chandigarh ',
    'Chhattisgarh',
    'Delhi',
    'Goa',
    'Gujarat',
    'Haryana',
    '	Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Ladakh',
    '	Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Punjab',
    'Rajasthan',
    'Sikkim	',
    '	Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    '	West Bengal',
  ];

  city = new FormControl();

  city_list: string[] = ['Kalyan'];

  area = new FormControl();

  area_list: string[] = ['Tisgaon'];

  status = new FormControl();

  statusList: string[] = [
    'Instore ',
    'Placed',
    'Accepted',
    'Out For Delivery',
    'Return',
    'Delivered',
    'Canceled',
  ];

  level = new FormControl();

  level_list: string[] = ['1', '2'];

  approval_status = new FormControl();

  approval_statuslist: string[] = ['Pending', 'Approved', 'Rejected'];

  cashback_type = new FormControl();

  cashback_typelist: string[] = ['Flat', 'Percentage'];

  endDate = new FormControl();

  endDatelist: string[] = ['1 Month', '3 Month', '6 Month'];

  transaction = new FormControl();

  transactionlist: string[] = [
    'Campaign Refill',
    'Transfer',
    'Withdraw',
    'Direct Sale',
    'Exisiting Lead',
    'New Lead',
  ];

  // export

  openFile() {
    document.querySelector('input')?.click();
  }
  handle(e: any) {
    console.log('Change input file');
  }

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  // view update

  get getHeight() {
    return window.innerHeight;
  }
  get getWidth() {
    return window.innerWidth;
  }

  view(): void {
    let isPhone = this.getWidth < 768;
    let w = isPhone ? this.getWidth + 'px' : '480px';
    const profile = this.dialog.open(WithdrawviewComponent, {
      width: w,
      minWidth: '950px',
      maxWidth: '320px',
      // height: h,
      hasBackdrop: true,
      disableClose: false,
      panelClass: 'dialogLayout', //, autoFocus:false
    });
    profile.afterClosed().subscribe(() => {});
  }

  update(): void {
    let isPhone = this.getWidth < 768;
    let w = isPhone ? this.getWidth + 'px' : '480px';
    const profile = this.dialog.open(WithdrawupdateComponent, {
      width: w,
      minWidth: '950px',
      maxWidth: '320px',
      // height: h,
      hasBackdrop: true,
      disableClose: false,
      panelClass: 'dialogLayout', //, autoFocus:false
    });
    profile.afterClosed().subscribe(() => {});
  }
}
