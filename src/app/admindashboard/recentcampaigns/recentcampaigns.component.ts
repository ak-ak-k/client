import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { take } from 'rxjs';

export interface UserData {
  camp_name: string;
  category: string;
  sub_category: string;
  total_earn: string;
  total_spent: string;
  refr_count: string;
  wallet: string;
  cashback_type: string;
  Approval: string;
  start_date: string;
  end_date: string;

  status: string;
  action: string;
}

@Component({
  selector: 'app-recentcampaigns',
  templateUrl: './recentcampaigns.component.html',
  styleUrls: ['./recentcampaigns.component.scss'],
})
export class RecentcampaignsComponent implements OnInit {
  selected = 'option2';

  displayedColumns: string[] = [
    'camp_name',
    'category',
    'sub_category',
    'total_earn',
    'total_spent',
    'refr_count',
    'wallet',
    'cashback_type',
    'Approval',
    'start_date',
    'end_date',

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
        camp_name: 'Aryan ',
        category: 'Health ',
        sub_category: 'Dentist ',
        total_earn: '1400 ',
        total_spent: '1400 ',
        refr_count: '1400 ',
        wallet: '1400 ',
        cashback_type: '1400 ',
        Approval: '1400 ',
        start_date: '22/12/2022 ',
        end_date: '22/12/2022 ',

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
