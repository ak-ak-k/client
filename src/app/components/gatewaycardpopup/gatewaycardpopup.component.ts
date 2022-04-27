import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GatewaycardComponent } from '../gatewaycard/gatewaycard.component';

@Component({
  selector: 'app-gatewaycardpopup',
  templateUrl: './gatewaycardpopup.component.html',
  styleUrls: ['./gatewaycardpopup.component.scss'],
})
export class GatewaycardpopupComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(GatewaycardComponent, {
      width: '500px',
      height: '500px',
    });
  }
}
