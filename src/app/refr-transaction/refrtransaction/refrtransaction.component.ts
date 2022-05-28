import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  oid: string;
  merchant: string;
  TransactionType: string;
  Amount: string;
  Commission: string;
  refrcommission: string;

  action: string;
}

interface merchant {
  value: string;
  viewValue: string;
}

interface transaction {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-refrtransaction',
  templateUrl: './refrtransaction.component.html',
  styleUrls: ['./refrtransaction.component.scss'],
})
export class RefrtransactionComponent implements OnInit {
  //

  selected = 'option2';

  displayedColumns: string[] = [
    'oid',
    'merchant',
    'TransactionType',
    'Amount',
    'Commission',
    'refrcommission',
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
        merchant: 'Nachiket (U)',
        TransactionType: 'Campaign Refill',
        Amount: '5000',
        Commission: '10%',
        refrcommission: '500',

        action: 'yes',
      },
      {
        oid: '1234567890',
        merchant: 'Aditya (U)',
        TransactionType: 'Burn Section',
        Amount: '2000',
        Commission: '10%',
        refrcommission: '200',

        action: 'yes',
      },
      {
        oid: '1234567890',
        merchant: 'Ashish (U)',
        TransactionType: 'User Withdrawl',
        Amount: '2000',
        Commission: '2%',
        refrcommission: '40',

        action: 'yes',
      },
      {
        oid: '1234567890',
        merchant: 'Nachiket (U)',
        TransactionType: 'Merch Withdrawl',
        Amount: '2000',
        Commission: '10%',
        refrcommission: '300',

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
  merchantlist: merchant[] = [{ value: 'a-0', viewValue: 'Nachiket (U)' }];

  transactionlist: transaction[] = [
    { value: 'steak-0', viewValue: 'Campaign Refill' },
    { value: 'steak-1', viewValue: 'Burn Section' },
    { value: 'steak-2', viewValue: 'User Withdrawl' },
    { value: 'steak-3', viewValue: 'Merch Withdrawl' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
