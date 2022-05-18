import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  cname: string;
  tearned: string;
  totalspend: string;
  refrcount: string;
  cashback: string;
  status: string;
  createDate: string;
  endDate: string;
  action: string;
}

interface Food {
  value: string;
  viewValue: string;
}

interface kyc {
  value: string;
  viewValue: string;
}

interface bank {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-editsection',
  templateUrl: './editsection.component.html',
  styleUrls: ['./editsection.component.scss'],
})
export class EditsectionComponent implements OnInit {
  // ===========

  types: Food[] = [
    // { value: 'electronic-0', viewValue: 'Electronic' },
    { value: 'a-1', viewValue: 'Television & Large appliances' },
    { value: 'a-2', viewValue: 'Accessories' },
    { value: 'a-3', viewValue: 'Mobile phones' },
    { value: 'a-4', viewValue: 'Computer & Tablets' },
  ];

  // --------------

  selected = 'option2';

  displayedColumns: string[] = [
    'cname',
    'tearned',
    'totalspend',
    'refrcount',
    'cashback',
    'status',
    'createDate',
    'endDate',
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
        cname: 'Diwali Mahasale',
        tearned: '10,000',
        totalspend: '1500',
        refrcount: '25',
        cashback: 'Flat',
        status: 'Active',
        createDate: '22/02/2022',
        endDate: '22/10/2022',
        action: 'yes',
      },
      {
        cname: 'Diwali Mahasale',
        tearned: '10,000',
        totalspend: '1500',
        refrcount: '25',
        cashback: 'Percentage',
        status: 'Inactive',
        createDate: '22/02/2022',
        endDate: '22/10/2022',
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

  // ----------------
  openFile() {
    document.querySelector('input')?.click();
  }
  handle(e: any) {
    console.log('Change input file');
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

  store = new FormControl();

  storeList: string[] = ['Online', 'Offline', 'Online+Offline'];

  burn = new FormControl();

  burnList: string[] = ['Yes', 'No'];

  sub_cat = new FormControl();

  sub_catlist: string[] = ['Men', 'Women', 'Kids', 'Footwear', 'Accessories'];

  sa = new FormControl();

  saList: string[] = ['Active', 'Inactive'];

  kycLists: kyc[] = [
    { value: 'steak-0', viewValue: 'Approved' },
    { value: 'pizza-1', viewValue: 'Pending' },
  ];

  bankLists: bank[] = [
    { value: 'steak-0', viewValue: 'Completed' },
    { value: 'pizza-1', viewValue: 'Pending' },
    { value: 'pizza-1', viewValue: 'Rejected' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
