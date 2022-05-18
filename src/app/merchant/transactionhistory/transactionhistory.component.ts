import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { take } from 'rxjs';

export interface UserData {
  oid: string;
  date: string;
  transaction_type: string;
  amount: string;
  process_fee: string;
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
  selector: 'app-transactionhistory',
  templateUrl: './transactionhistory.component.html',
  styleUrls: ['./transactionhistory.component.scss'],
})
export class TransactionhistoryComponent implements OnInit {
  selected = 'option2';

  displayedColumns: string[] = [
    'oid',
    'date',
    'transaction_type',
    'amount',
    'process_fee',
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
        transaction_type: 'Campaign Refill',
        amount: '5126',
        process_fee: '700',
        taxes: '126',
        total_amnt: '4300',
        status: 'Credited',
      },
      {
        oid: '1234567890',
        date: '14/05/2022',
        transaction_type: 'Withdrawl',
        amount: '5126',
        process_fee: '700',
        taxes: '126',
        total_amnt: '4300',
        status: 'Debited',
      },
      {
        oid: '1234567890',
        date: '14/05/2022',
        transaction_type: 'Transfer',
        amount: '5126',
        process_fee: '--',
        taxes: '--',
        total_amnt: '4300',
        status: 'Transfer',
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
    { value: 'tacos-2', viewValue: 'New Lead' },
  ];

  amount: amount[] = [
    { value: 'steak-0', viewValue: '5126' },
    { value: 'pizza-1', viewValue: '3000' },
  ];

  totalamt: total[] = [
    { value: 'steak-0', viewValue: '5126' },
    { value: 'pizza-1', viewValue: '5126' },
  ];

  datelist: date[] = [
    { value: 'steak-0', viewValue: 'Credited' },
    { value: 'pizza-1', viewValue: 'Debited' },
    { value: 'abc-2', viewValue: 'Transfer' },
  ];
}
