import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { take } from 'rxjs';

export interface UserData {
  storename: string;
  phonename: string;
  storetype: string;
  status: string;
  storewallet: string;
  area: string;
  onboard: string;

  action: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  selected = 'option2';

  displayedColumns: string[] = [
    'storename',
    'phonename',
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
        phonename: '1234567890',
        storetype: 'Online+Offline',
        status: 'Inactive ',
        storewallet: '5,000 ',
        area: 'Mahavir Nagar,Ahmedabad ',
        onboard: 'Product Catalog ',
        action: 'yes',
      },
      {
        storename: 'Aakad bakad baumbay boo',
        phonename: '1234567890',
        storetype: 'Online+Offline',
        status: 'Active ',
        storewallet: '5,000 ',
        area: 'Mahavir Nagar,Ahmedabad ',
        onboard: 'Product Catalog ',
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

  ngOnInit(): void {}
}
