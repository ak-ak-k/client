import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/components/refrcash/refrcash.component';

interface status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-updatesubcategory',
  templateUrl: './updatesubcategory.component.html',
  styleUrls: ['./updatesubcategory.component.scss'],
})
export class UpdatesubcategoryComponent implements OnInit {
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
    public dialogRef: MatDialogRef<UpdatesubcategoryComponent>,
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
