import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editburnproducts',
  templateUrl: './editburnproducts.component.html',
  styleUrls: ['./editburnproducts.component.scss'],
})
export class EditburnproductsComponent implements OnInit {
  category = new FormControl('', [Validators.required, Validators.required]);
  prod_name = new FormControl('', [Validators.required, Validators.required]);
  desc = new FormControl('', [Validators.required, Validators.required]);
  mrp = new FormControl('', [Validators.required, Validators.required]);
  hsn = new FormControl('', [Validators.required, Validators.required]);
  discountprice = new FormControl('', [
    Validators.required,
    Validators.required,
  ]);

  constructor() {}

  ngOnInit(): void {}
}
