import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/components/refrcash/refrcash.component';

interface status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-addsubcategory',
  templateUrl: './addsubcategory.component.html',
  styleUrls: ['./addsubcategory.component.scss'],
})
export class AddsubcategoryComponent implements OnInit {
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

  // ------------
  constructor(
    public dialogRef: MatDialogRef<AddsubcategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {}

  statuslist: status[] = [
    { value: 'steak-0', viewValue: 'Active' },
    { value: 'pizza-1', viewValue: 'Inactive' },
  ];

  onNoClick(): void {
    this.dialogRef.close();
  }
}
