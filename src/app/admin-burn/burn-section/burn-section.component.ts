import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  oid: string;
  name: string;
  storename: string;
  category: string;
  sub_category: string;
  amount: string;
  refr_used: string;
  payment: string;
  approval: string;
  date: string;

  action: string;
}

interface bank {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-burn-section',
  templateUrl: './burn-section.component.html',
  styleUrls: ['./burn-section.component.scss'],
})
export class BurnSectionComponent implements OnInit {
  selected = 'option2';

  displayedColumns: string[] = [
    'oid',
    'name',
    'storename',
    'category',
    'sub_category',
    'amount',
    'refr_used',
    'payment',
    'approval',
    'date',

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
        name: 'Brij Mohanlal Desai',
        storename: '10000',
        category: '200',
        sub_category: '200',
        amount: '200',
        refr_used: '200',
        payment: '200',
        approval: 'Approved',
        date: '21/09/2022',

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
