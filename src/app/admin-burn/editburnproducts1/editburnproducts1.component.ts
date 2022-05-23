import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { take } from 'rxjs';

export interface UserData {
  Image: string;
  prod_details: string;
  category: string;
  sub_category: string;
  start_date: string;
  end_date: string;
  orders: string;

  action: string;
}

@Component({
  selector: 'app-editburnproducts1',
  templateUrl: './editburnproducts1.component.html',
  styleUrls: ['./editburnproducts1.component.scss'],
})
export class Editburnproducts1Component implements OnInit {
  selected = 'option2';

  displayedColumns: string[] = [
    'Image',
    'prod_details',
    'category',
    'sub_category',
    'start_date',
    'end_date',
    'orders',

    'action',
  ];
  dataSource!: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog) {}

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
        Image: 'yes',
        prod_details: 'Iphone',
        category: 'Electronics',
        sub_category: 'Electronics',
        start_date: '22/02/2022',
        end_date: '22/02/2022',
        orders: '2',

        action: 'active',
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
