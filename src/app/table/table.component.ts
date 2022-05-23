import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: string;
  hsn: string;
  qty: string;
  price: string;
  netvalue: string;
  tax_rate: string;
  tax_type: string;
  tax_amnt: string;
  total_amnt: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: '1',
    name: 'Coberta Printed Back Cover for Realme 1 Back Cover Case - Blue',
    hsn: '20081990',
    qty: '3',
    price: '10',
    netvalue: '20',
    tax_rate: '18%',
    tax_type: 'CGST+SGST ',
    tax_amnt: '20',
    total_amnt: '10,620',
  },
  {
    position: '1',
    name: 'Helium',
    hsn: 'asda',
    qty: 'He',
    price: '10',
    netvalue: '20',
    tax_rate: '20',
    tax_type: '20',
    tax_amnt: '20',
    total_amnt: '20',
  },
  {
    position: '',
    name: 'Shipping Charges',
    hsn: '',
    qty: '',
    price: '10',
    netvalue: '20',
    tax_rate: '20',
    tax_type: '20',
    tax_amnt: '20',
    total_amnt: '20',
  },
  {
    position: '',
    name: 'Total',
    hsn: '',
    qty: '',
    price: '',
    netvalue: '',
    tax_rate: '',
    tax_type: '',
    tax_amnt: '20',
    total_amnt: '20',
  },
  {
    position: '',
    name: 'Amount in Words',
    hsn: '',
    qty: '',
    price: '',
    netvalue: '',
    tax_rate: '',
    tax_type: '',
    tax_amnt: '',
    total_amnt: 'Fifty Four Thousand Two Hundred and Fifty Rupees Only',
  },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'name',
    'hsn',
    'qty',
    'price',
    'netvalue',
    'tax_rate',
    'tax_type',
    'tax_amnt',
    'total_amnt',
  ];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
