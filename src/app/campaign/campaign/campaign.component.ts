import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CampaigncustomComponent } from '../campaigncustom/campaigncustom.component';

export interface UserData {
  camp_name: string;
  storename: string;
  category: string;
  sub_category: string;
  total_earn: string;
  total_spent: string;
  refr_count: string;
  wallet_amount: string;
  cashback_type: string;
  approval: string;
  start_date: string;
  end_date: string;
  status: string;
  action: string;
}

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss'],
})
export class CampaignComponent implements OnInit {
  //

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  //

  selected = 'option2';

  displayedColumns: string[] = [
    'camp_name',
    'storename',
    'category',
    'sub_category',
    'total_earn',
    'total_spent',
    'refr_count',
    'wallet_amount',
    'cashback_type',
    'approval',
    'start_date',
    'end_date',
    'status',
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
        camp_name: 'Dipesh',
        storename: 'Dent Heal',
        category: 'Health',
        sub_category: 'Dentist',
        total_earn: '1400',
        total_spent: '1400',
        refr_count: '1400',
        wallet_amount: '1400',
        cashback_type: 'Flat',
        approval: 'Pending',
        start_date: '22/12/2022',
        end_date: '22/12/2022',
        status: 'Inactive',
        action: 'yes',
      },
      {
        camp_name: 'Ashish',
        storename: 'Dent Heal',
        category: 'Health',
        sub_category: 'Dentist',
        total_earn: '1400',
        total_spent: '1400',
        refr_count: '1400',
        wallet_amount: '1400',
        cashback_type: 'Flat',
        approval: 'Approved',
        // approval-- green color
        start_date: '22/12/2022',
        end_date: '22/12/2022',
        status: 'Active',
        action: 'yes',
      },
      {
        camp_name: 'Aryan',
        storename: 'Dent Heal',
        category: 'Health',
        sub_category: 'Dentist',
        total_earn: '1400',
        total_spent: '1400',
        refr_count: '1400',
        wallet_amount: '1400',
        cashback_type: 'Flat',
        approval: 'Rejected',
        // approval-- red color
        start_date: '22/12/2022',
        end_date: '22/12/2022',
        status: 'Active',
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

  approval_status = new FormControl();

  approval_statuslist: string[] = ['Pending', 'Approved', 'Rejected'];

  cashback_type = new FormControl();

  cashback_typelist: string[] = ['Flat', 'Percentage'];

  endDate = new FormControl();

  endDatelist: string[] = ['1 Month', '3 Month', '6 Month'];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  // export

  openFile() {
    document.querySelector('input')?.click();
  }
  handle(e: any) {
    console.log('Change input file');
  }

  // Approval

  get getHeight() {
    return window.innerHeight;
  }
  get getWidth() {
    return window.innerWidth;
  }

  openDialog(): void {
    let isPhone = this.getWidth < 768;
    let w = isPhone ? this.getWidth + 'px' : '480px';
    const profile = this.dialog.open(CampaigncustomComponent, {
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
