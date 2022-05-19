import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { take } from 'rxjs';

export interface UserData {
  level: string;
  store_share: string;
  cashback_earned: string;
  recommend: string;
  status: string;
}

@Component({
  selector: 'app-user-viewall',
  templateUrl: './user-viewall.component.html',
  styleUrls: ['./user-viewall.component.scss'],
})
export class UserViewallComponent implements OnInit {
  selected = 'option2';

  displayedColumns: string[] = [
    'level',
    'store_share',
    'cashback_earned',
    'recommend',
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
        level: '1',
        store_share: '8/10',
        cashback_earned: '1400',
        recommend: '25/50',
        status: 'Completed',
      },
      {
        level: '5',
        store_share: '8/10',
        cashback_earned: '1400',
        recommend: '25/50',
        status: 'Inprogress',
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
