import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { take } from 'rxjs';

export interface UserData {
  products_detail: string;
  brand_name: string;
  category_name: string;
  sub_category: string;
  mrp: string;
  discount_price: string;
  quantity: string;
  sale: string;
  new: string;

  action: string;
}

@Component({
  selector: 'app-exculsiveproducts',
  templateUrl: './exculsiveproducts.component.html',
  styleUrls: ['./exculsiveproducts.component.scss'],
})
export class ExculsiveproductsComponent implements OnInit {
  selected = 'option2';

  displayedColumns: string[] = [
    'products_detail',
    'brand_name',
    'category_name',
    'sub_category',
    'mrp',
    'discount_price',
    'quantity',
    'sale',
    'new',

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
        products_detail: 'yes',
        brand_name: 'Uni',
        category_name: 'Electronics',
        sub_category: 'Electronics',
        mrp: '1000',
        discount_price: '1000',
        quantity: '1000',
        sale: 'Yes',
        new: 'Yes',

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
