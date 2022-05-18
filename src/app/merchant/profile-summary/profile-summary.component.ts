import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  oid: string;
  customer_name: string;
  order_amount: string;
  refr_cash: string;
  refr_cash_paid: string;
  ord_date: string;
  status: string;
  payment: string;
  action: string;
}

interface bank {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-profile-summary',
  templateUrl: './profile-summary.component.html',
  styleUrls: ['./profile-summary.component.scss'],
})
export class ProfileSummaryComponent implements OnInit {
  selected = 'option2';

  displayedColumns: string[] = [
    'oid',
    'customer_name',
    'order_amount',
    'refr_cash',
    'refr_cash_paid',
    'ord_date',
    'status',
    'payment',
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
        customer_name: 'Brij Mohanlal Desai',
        order_amount: '10000',
        refr_cash: '200',
        refr_cash_paid: '50',
        ord_date: '22/12/2022',
        status: 'Instore',
        payment: 'COD',
        action: 'yes',
      },
      {
        oid: '1234567890',
        customer_name: 'Brij Mohanlal Desai',
        order_amount: '10000',
        refr_cash: '200',
        refr_cash_paid: '---',
        ord_date: '22/12/2022',
        status: 'Placed',
        payment: 'COD',
        action: 'yes',
      },
      {
        oid: '1234567890',
        customer_name: 'Brij Mohanlal Desai',
        order_amount: '10000',
        refr_cash: '200',
        refr_cash_paid: '---',
        ord_date: '22/12/2022',
        status: 'Accepted',
        payment: 'COD',
        action: 'yes',
      },
      {
        oid: '1234567890',
        customer_name: 'Brij Mohanlal Desai',
        order_amount: '10000',
        refr_cash: '200',
        refr_cash_paid: '---',
        ord_date: '22/12/2022',
        status: 'Out for Delivery',
        payment: 'COD',
        action: 'yes',
      },
      {
        oid: '1234567890',
        customer_name: 'Brij Mohanlal Desai',
        order_amount: '10000',
        refr_cash: '200',
        refr_cash_paid: '---',
        ord_date: '22/12/2022',
        status: 'Return',
        payment: 'Online',
        action: 'yes',
      },
      {
        oid: '1234567890',
        customer_name: 'Brij Mohanlal Desai',
        order_amount: '10000',
        refr_cash: '200',
        refr_cash_paid: '---',
        ord_date: '22/12/2022',
        status: 'Delivered',
        payment: 'Online',
        action: 'yes',
      },
      {
        oid: '1234567890',
        customer_name: 'Brij Mohanlal Desai',
        order_amount: '10000',
        refr_cash: '200',
        refr_cash_paid: '---',
        ord_date: '22/12/2022',
        status: 'Rejected',
        payment: 'Online',
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

  bankLists: bank[] = [
    { value: 'steak-0', viewValue: 'Completed' },
    { value: 'pizza-1', viewValue: 'Pending' },
    { value: 'pizza-1', viewValue: 'Rejected' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
