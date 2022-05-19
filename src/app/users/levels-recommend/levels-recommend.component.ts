import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { take } from 'rxjs';

export interface UserData {
  oid: string;
  recommend: string;
  merchant_name: string;
  refr_earn: string;
  refr_paid: string;
  date: string;
}

@Component({
  selector: 'app-levels-recommend',
  templateUrl: './levels-recommend.component.html',
  styleUrls: ['./levels-recommend.component.scss'],
})
export class LevelsRecommendComponent implements OnInit {
  selected = 'option2';

  displayedColumns: string[] = [
    'oid',
    'recommend',
    'merchant_name',
    'refr_earn',
    'refr_paid',
    'date',
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
        recommend: 'Brij Mohanlal Desai',
        merchant_name: 'Brij Mohanlal Desai',
        refr_earn: '1400',
        refr_paid: '1400',
        date: '14/05/2022',
      },
      {
        oid: '1234567890',
        recommend: 'Brij Mohanlal Desai',
        merchant_name: 'Brij Mohanlal Desai',
        refr_earn: '1400',
        refr_paid: '1400',
        date: '14/05/2022',
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
