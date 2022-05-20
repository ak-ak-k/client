import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { take } from 'rxjs';

export interface UserData {
  name: string;
  phone: string;
  area: string;
  level: string;
  refr_earned: string;
  share: string;
  recommend: string;
  create_date: string;
  status: string;

  action: string;
}

@Component({
  selector: 'app-recentusers',
  templateUrl: './recentusers.component.html',
  styleUrls: ['./recentusers.component.scss'],
})
export class RecentusersComponent implements OnInit {
  selected = 'option2';

  displayedColumns: string[] = [
    'name',
    'phone',
    'area',
    'level',
    'refr_earned',
    'share',
    'recommend',
    'create_date',
    'status',
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
        name: 'Brij Mohanlal Desai',
        phone: '1234567890',
        area: 'Mahavir Nagar,Ahmedabad ',
        level: '1',
        refr_earned: '25',
        share: '25',
        recommend: '25',
        create_date: '22/12/2022',
        status: 'Inactive ',

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
