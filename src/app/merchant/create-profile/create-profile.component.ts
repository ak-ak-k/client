import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss'],
})
export class CreateProfileComponent implements OnInit {
  toppings = new FormControl();

  toppingList: string[] = [
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

  store = new FormControl();

  storeList: string[] = ['Online', 'Offline', 'Online+Offline'];

  burn = new FormControl();

  burnList: string[] = ['Yes', 'No'];

  sub_cat = new FormControl();

  sub_catlist: string[] = ['Men', 'Women', 'Kids', 'Footwear', 'Accessories'];

  sa = new FormControl();

  saList: string[] = ['Active', 'Inactive'];

  constructor() {}

  ngOnInit(): void {}
}
