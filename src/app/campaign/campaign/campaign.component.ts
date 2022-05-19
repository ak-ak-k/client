import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  oid: string;
  customer_name: string;
  storename: string;
  category: string;
  sub_category: string;
  total_amount: string;
  area: string;
  sale_type: string;
  order_status: string;
  payment: string;
  action: string;
}

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss'],
})
export class CampaignComponent implements OnInit {
  //

  selected = 'option2';

  displayedColumns: string[] = [
    'oid',
    'customer_name',
    'storename',
    'category',
    'sub_category',
    'total_amount',
    'area',
    'sale_type',
    'order_status',
    'payment',
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
        customer_name: 'Brij Mohanlal Desai',
        storename: 'Brij Mohanlal Desai',
        category: 'Health',
        sub_category: 'Health',
        total_amount: '200',
        area: 'Mahavir',
        sale_type: 'Direct ',
        order_status: '200 ',
        payment: 'COD ',
        action: 'yes ',
      },
      {
        oid: '1234567890',
        customer_name: 'Brij Mohanlal Desai',
        storename: 'Brij Mohanlal Desai',
        category: 'Health',
        sub_category: 'Health',
        total_amount: '200',
        area: 'Mahavir',
        sale_type: 'Existing ',
        order_status: '200 ',
        payment: 'Online ',
        action: 'yes ',
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

  toppings = new FormControl();

  categories: string[] = [
    'Fashion',
    'Food & Beverages',
    'Salon & Spas',
    'Beauty & Grooming',
    'Electronics',
    'Health',
    'Fitness',
    'Grocery',
    'Pet Store',
    'Pharmacy',
    'Home',
    'Mom & baby',
  ];

  sub_cat = new FormControl();

  sub_catlist: string[] = ['Men', 'Women', 'Kids', 'Footwear', 'Accessories'];

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

  statusList: string[] = [
    'Instore ',
    'Placed',
    'Accepted',
    'Out For Delivery',
    'Return',
    'Delivered',
    'Canceled',
  ];

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
