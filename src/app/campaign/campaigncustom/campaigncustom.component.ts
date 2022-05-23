import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/components/refrcash/refrcash.component';

@Component({
  selector: 'app-campaigncustom',
  templateUrl: './campaigncustom.component.html',
  styleUrls: ['./campaigncustom.component.scss'],
})
export class CampaigncustomComponent implements OnInit {
  cancel(): void {
    this.dialogRef.close();
  }

  constructor(
    public dialogRef: MatDialogRef<CampaigncustomComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {}
}
