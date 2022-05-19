import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { take } from 'rxjs';

export interface UserData {
  oid: string;
  merchant_name: string;
  category: string;
  storedata: string;
  share_app: string;
}
@Component({
  selector: 'app-levels-store-share',
  templateUrl: './levels-store-share.component.html',
  styleUrls: ['./levels-store-share.component.scss'],
})
export class LevelsStoreShareComponent implements OnInit {
  selected = 'option2';

  displayedColumns: string[] = [
    'oid',
    'merchant_name',
    'category',
    'storedata',
    'share_app',
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
        merchant_name: 'Brij Mohanlal Desai',
        category: 'Fashion',
        storedata: '22/12/2022',
        share_app: 'Facebook',
      },
      {
        oid: '1234567890',
        merchant_name: 'Brij Mohanlal Desai',
        category: 'Fashion',
        storedata: '22/12/2022',
        share_app: 'Whatsapp',
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

  constructor() {}

  ngOnInit(): void {}
}
