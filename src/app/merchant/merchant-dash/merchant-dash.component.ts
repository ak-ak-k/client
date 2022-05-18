import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { take } from 'rxjs';

export interface UserData {
  storename: string;
  phone: string;
  storetype: string;
  // status: string;
  storewallet: string;
  area: string;
  onboard: string;
  action: string;
}

@Component({
  selector: 'app-merchant-dash',
  templateUrl: './merchant-dash.component.html',
  styleUrls: ['./merchant-dash.component.scss'],
})
export class MerchantDashComponent implements OnInit {
  selected = 'option2';

  displayedColumns: string[] = [
    'storename',
    'phone',
    'storetype',
    'status',
    'storewallet',
    'area',
    'onboard',
    'action',
  ];
  dataSource!: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {}

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
        storename: 'Aakad bakad baumbay boo',
        phone: '1234567890',
        storetype: 'Online+Offline',
        // status: 'Inactive',
        storewallet: '5,000',
        area: 'Mahavir Nagar,Ahmedabad',
        onboard: 'Product Catalog',
        action: 'yes',
      },
      {
        storename: 'Aakad bakad baumbay boo',
        phone: '1234567890',
        storetype: 'Online',
        // status: 'Active',
        storewallet: '5,000',
        area: 'Mahavir Nagar,Ahmedabad',
        onboard: 'Product Catalog',
        action: 'yes',
      },
      {
        storename: 'Aakad bakad baumbay boo',
        phone: '1234567890',
        storetype: 'Offline',
        // status: 'Active',
        storewallet: '5,000',
        area: 'Mahavir Nagar,Ahmedabad',
        onboard: 'Product Catalog',
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

  toppings = new FormControl();

  toppingList: string[] = [
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

  city_list: string[] = ['kalyan'];

  store = new FormControl();

  storeList: string[] = ['Online', 'Offline', 'Online+Offline'];

  onboarding = new FormControl();

  onboardingList: string[] = [
    'Creation',
    'Campaign Creation',
    'Wallet Refill',
    'Product Catlog',
    'Online+Offline',
  ];

  status = new FormControl();

  statusList: string[] = ['Active', 'Inactive'];

  wallet = new FormControl();

  walletList: string[] = ['1k', '5k', '10k', '15k', '20k'];

  ngOnInit(): void {}

  openFile() {
    document.querySelector('input')?.click();
  }
  handle(e: any) {
    console.log('Change input file');
  }
}
