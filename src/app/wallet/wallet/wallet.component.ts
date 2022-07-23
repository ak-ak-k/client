import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Observable, of, take } from 'rxjs';
import { WallethowitworkComponent } from '../wallethowitwork/wallethowitwork.component';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
})
export class WalletComponent implements OnInit {
  payments$: Observable<any> = of();

  constructor(private _bottomSheet: MatBottomSheet) {}

  howitwork() {
    this._bottomSheet.open(WallethowitworkComponent, {
      panelClass: 'wallethowitworks',
    });
  }

  ngOnInit(): void {}
}
