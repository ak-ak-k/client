import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { take } from 'rxjs';
import { AddcategoryComponent } from '../addcategory/addcategory.component';
import { UpdatecategoryComponent } from '../updatecategory/updatecategory.component';

export interface UserData {
  Image: string;
  category_name: string;
  start_date: string;
  status: string;
  action: string;
}

@Component({
  selector: 'app-categorygroup',
  templateUrl: './categorygroup.component.html',
  styleUrls: ['./categorygroup.component.scss'],
})
export class CategorygroupComponent implements OnInit {
  selected = 'option2';

  displayedColumns: string[] = [
    'Image',
    'category_name',
    'start_date',
    'status',
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
        category_name: 'Electronics',
        start_date: '22/02/2022',
        status: 'Active',
        action: 'active',
      },
      {
        Image: 'yes',
        category_name: 'Electronics',
        start_date: '22/02/2022',
        status: 'Active',
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

  openFile() {
    document.querySelector('input')?.click();
  }
  handle(e: any) {
    console.log('Change input file');
  }

  ngOnInit(): void {}

  // ----

  get getHeight() {
    return window.innerHeight;
  }
  get getWidth() {
    return window.innerWidth;
  }

  create() {
    let isPhone = this.getWidth < 768;
    let w = isPhone ? this.getWidth + 'px' : '480px';
    const profile = this.dialog.open(AddcategoryComponent, {
      width: w,
      minWidth: '950px',
      maxWidth: '320px',
      // height: h,
      hasBackdrop: true,
      disableClose: false,
      panelClass: 'dialogLayout', //, autoFocus:false
    });
    profile.afterClosed().subscribe(() => {});
  }

  update() {
    let isPhone = this.getWidth < 768;
    let w = isPhone ? this.getWidth + 'px' : '480px';
    const profile = this.dialog.open(UpdatecategoryComponent, {
      width: w,
      minWidth: '950px',
      maxWidth: '320px',
      // height: h,
      hasBackdrop: true,
      disableClose: false,
      panelClass: 'dialogLayout', //, autoFocus:false
    });
    profile.afterClosed().subscribe(() => {});
  }
}
