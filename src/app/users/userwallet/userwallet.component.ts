import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { take } from 'rxjs';

export interface UserData {
  oid: string;
  cust_name: string;
  cashback_type: string;
  refr_paid: string;
  refr_earn: string;
  total_amount: string;
  date: string;
}

interface cashback {
  value: string;
  viewValue: string;
}

interface refr {
  value: string;
  viewValue: string;
}

interface total {
  value: string;
  viewValue: string;
}

interface date {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-userwallet',
  templateUrl: './userwallet.component.html',
  styleUrls: ['./userwallet.component.scss'],
})
export class UserwalletComponent implements OnInit {
  selected = 'option2';

  displayedColumns: string[] = [
    'oid',
    'cust_name',
    'cashback_type',
    'refr_paid',
    'refr_earn',
    'total_amount',
    'date',
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
        oid: '1234567890',
        cust_name: 'Brij Mohanlal Desai',
        cashback_type: 'Direct Sale',
        refr_paid: '700',
        refr_earn: '700',
        total_amount: '5126',
        date: '14/05/2022',
      },
      {
        oid: '1234567890',
        cust_name: 'Brij Mohanlal Desai',
        cashback_type: 'Exisiting Lead',
        refr_paid: '700',
        refr_earn: '700',
        total_amount: '5126',
        date: '14/05/2022',
      },
      {
        oid: '1234567890',
        cust_name: 'Brij Mohanlal Desai',
        cashback_type: 'New Lead',
        refr_paid: '700',
        refr_earn: '700',
        total_amount: '5126',
        date: '14/05/2022',
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

  ngOnInit(): void {}

  cashbackList: cashback[] = [
    { value: 'steak-0', viewValue: 'Direct Sale' },
    { value: 'pizza-1', viewValue: 'Exisiting Lead' },
    { value: 'tacos-2', viewValue: 'New Lead' },
  ];

  refrcash: refr[] = [
    { value: 'steak-0', viewValue: 'Refr cash Paid' },
    { value: 'pizza-1', viewValue: 'Refr cash Earn' },
  ];

  totalamt: total[] = [
    { value: 'steak-0', viewValue: '5126' },
    { value: 'pizza-1', viewValue: '5126' },
  ];

  datelist: date[] = [
    { value: 'steak-0', viewValue: '14/05/2022' },
    { value: 'pizza-1', viewValue: '15/05/2022' },
  ];
}
