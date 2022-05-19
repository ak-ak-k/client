import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  name: string;
  phone: string;
  area: string;
  level: string;
  refr_earn: string;
  buss_share: string;
  recommed: string;
  created_date: string;
  action: string;
}

@Component({
  selector: 'app-userdash',
  templateUrl: './userdash.component.html',
  styleUrls: ['./userdash.component.scss'],
})
export class UserdashComponent implements OnInit {
  //

  selected = 'option2';

  displayedColumns: string[] = [
    'name',
    'phone',
    'area',
    'level',
    'buss_share',
    'refr_earn',
    'recommed',
    'created_date',
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
        name: 'Brij Mohanlal Desai',
        phone: '1234567890',
        area: 'Mahavir Nagar,Ahmedabad',
        level: '1',
        refr_earn: '25',
        buss_share: '25',
        recommed: '25',
        created_date: '22/12/2022',
        action: 'yes',
      },
      {
        name: 'Brij Mohanlal Desai',
        phone: '1234567890',
        area: 'Mahavir Nagar,Ahmedabad',
        level: '5',
        refr_earn: '500',
        buss_share: '500',
        recommed: '500',
        created_date: '22/12/2022',
        action: 'yes',
      },
      {
        name: 'Brij Mohanlal Desai',
        phone: '1234567890',
        area: 'Mahavir Nagar,Ahmedabad',
        level: '6',
        refr_earn: '600',
        buss_share: '600',
        recommed: '600',
        created_date: '22/12/2022',
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

  //
  state = new FormControl();

  state_list: string[] = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chandigarh ',
    'Chhattisgarh',
    'Delhi',
    'Goa',
    'Gujarat',
    'Haryana',
    '	Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Ladakh',
    '	Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Punjab',
    'Rajasthan',
    'Sikkim	',
    '	Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    '	West Bengal',
  ];

  city = new FormControl();

  city_list: string[] = ['Kalyan'];

  area = new FormControl();

  area_list: string[] = ['Tisgaon'];

  status = new FormControl();

  statusList: string[] = ['Active', 'Inactive'];

  level = new FormControl();

  level_list: string[] = ['1', '2'];

  constructor() {}

  ngOnInit(): void {}

  // export

  openFile() {
    document.querySelector('input')?.click();
  }
  handle(e: any) {
    console.log('Change input file');
  }
}
