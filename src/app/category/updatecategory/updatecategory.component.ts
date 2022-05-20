import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/components/refrcash/refrcash.component';

interface status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.scss'],
})
export class UpdatecategoryComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<UpdatecategoryComponent>,
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
