import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  oid: string;
  storename: string;
  transaction_type: string;
  date: string;
  status: string;
  action: string;
}

@Component({
  selector: 'app-merchant-transaction',
  templateUrl: './merchant-transaction.component.html',
  styleUrls: ['./merchant-transaction.component.scss'],
})
export class MerchantTransactionComponent implements OnInit {
  //

  selected = 'option2';

  displayedColumns: string[] = [
    'oid',
    'storename',
    'transaction_type',
    'date',
    'status',
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
        storename: 'Dent Heal',
        transaction_type: 'Campaign Refill',
        date: '14/05/2022',
        status: 'Credited',
        action: 'yes',
      },
      {
        oid: '1234567890',
        storename: 'Dent Heal',
        transaction_type: 'Transfer',
        date: '14/05/2022',
        status: 'Debited',
        action: 'yes',
      },
      {
        oid: '1234567890',
        storename: 'Dent Heal',
        transaction_type: 'Withdraw',
        date: '14/05/2022',
        status: 'Credited + Debited ',
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

  constructor() {}

  ngOnInit(): void {}
}
