import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/components/refrcash/refrcash.component';

interface status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss'],
})
export class AddcategoryComponent implements OnInit {
  // ----------------

  // --------------
  constructor(
    public dialogRef: MatDialogRef<AddcategoryComponent>,
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
