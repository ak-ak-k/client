import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  sr: string;
  itdesc: string;
  hsncode: string;
  qty: string;
  unit_price: string;
  net_value: string;
  tax_rate: string;
  tax_type: string;
  tax_amount: string;
  total_amount: string;
}

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.scss'],
})
export class ViewdetailsComponent implements OnInit {
  selected = 'option2';
  displayedColumns: string[] = [
    'sr',
    'itdesc',
    'hsncode',
    'qty',
    'unit_price',
    'net_value',
    'tax_rate',
    'tax_type',
    'tax_amount',
    'total_amount',
  ];
  dataSource!: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  users: any;

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
        sr: '1',
        itdesc:
          'Coberta Printed Back Cover for Realme 1 Back Cover Case - Blue',
        hsncode: '20081990',
        qty: '3',
        unit_price: '3000 ',
        net_value: '9000',
        tax_rate: '18%',
        tax_type: 'CGST+SGST ',
        tax_amount: '1620',
        total_amount: '10,620',
      },
      {
        sr: '2',
        itdesc:
          'Coberta Printed Back Cover for Realme 1 Back Cover Case - Blue',
        hsncode: '20081990',
        qty: '3',
        unit_price: '3000 ',
        net_value: '9000',
        tax_rate: '18%',
        tax_type: 'CGST+SGST ',
        tax_amount: '1620',
        total_amount: '10,620',
      },
      {
        sr: '3',
        itdesc:
          'Coberta Printed Back Cover for Realme 1 Back Cover Case - Blue',
        hsncode: '20081990',
        qty: '3',
        unit_price: '3000 ',
        net_value: '9000',
        tax_rate: '18%',
        tax_type: 'CGST+SGST ',
        tax_amount: '1620',
        total_amount: '10,620',
      },
      {
        sr: '4',
        itdesc:
          'Coberta Printed Back Cover for Realme 1 Back Cover Case - Blue',
        hsncode: '20081990',
        qty: '3',
        unit_price: '3000 ',
        net_value: '9000',
        tax_rate: '18%',
        tax_type: 'CGST+SGST ',
        tax_amount: '1620',
        total_amount: '10,620',
      },
      {
        sr: '5',
        itdesc:
          'Coberta Printed Back Cover for Realme 1 Back Cover Case - Blue',
        hsncode: '20081990',
        qty: '3',
        unit_price: '3000 ',
        net_value: '9000',
        tax_rate: '18%',
        tax_type: 'CGST+SGST ',
        tax_amount: '1620',
        total_amount: '10,620',
      },
      {
        sr: '',
        itdesc: 'Shipping Charges',
        hsncode: '',
        qty: '',
        unit_price: '42.37 ',
        net_value: '42.37',
        tax_rate: '18%',
        tax_type: 'IGST ',
        tax_amount: '7.63',
        total_amount: '50',
      },
      {
        sr: '',
        itdesc: 'Total',
        hsncode: '',
        qty: '',
        unit_price: ' ',
        net_value: '',
        tax_rate: '',
        tax_type: ' ',
        tax_amount: '',
        total_amount: '54,250',
      },
      {
        sr: '',
        itdesc: 'Amount in Words',
        hsncode: '',
        qty: '',
        unit_price: ' ',
        net_value: '',
        tax_rate: '',
        tax_type: ' ',
        tax_amount: '',
        total_amount: 'Fifty Four Thousand Two Hundred and Fifty Rupees Only',
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
