import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { take } from 'rxjs';

export interface UserData {
  oid: string;
  date: string;
  storename: string;
  transaction_type: string;
  refr_earned: string;
  refr_paid: string;
  amount: string;
  taxes: string;
  total_amnt: string;
  status: string;
}

interface transaction {
  value: string;
  viewValue: string;
}

interface amount {
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
  selector: 'app-usertranscation',
  templateUrl: './usertranscation.component.html',
  styleUrls: ['./usertranscation.component.scss'],
})
export class UsertranscationComponent implements OnInit {
  selected = 'option2';

  displayedColumns: string[] = [
    'oid',
    'date',
    'storename',
    'transaction_type',
    'refr_earned',
    'refr_paid',
    'amount',
    'taxes',
    'total_amnt',
    'status',
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
        date: '14/05/2022',
        storename: 'Brij Mohanlal ',
        transaction_type: 'Direct Sale',
        refr_earned: '25',
        refr_paid: '---',
        amount: '1000',
        taxes: '---',
        total_amnt: '1000',
        status: 'Credited',
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

  transactiontype: transaction[] = [
    { value: 'steak-0', viewValue: 'Direct Sale' },
    { value: 'pizza-1', viewValue: 'Exisiting Lead' },
    { value: 'a-2', viewValue: 'New Lead' },
    { value: 'b-3', viewValue: 'Burn' },
    { value: 'b-4', viewValue: 'Withdrawl' },
  ];

  // amount: amount[] = [
  //   { value: 'steak-0', viewValue: '5126' },
  //   { value: 'pizza-1', viewValue: '3000' },
  // ];

  // totalamt: total[] = [
  //   { value: 'steak-0', viewValue: '5126' },
  //   { value: 'pizza-1', viewValue: '5126' },
  // ];

  datelist: date[] = [
    { value: 'steak-0', viewValue: 'Credited' },
    { value: 'pizza-1', viewValue: 'Debited' },
    { value: 'abc-2', viewValue: 'Transfer' },
  ];
}
