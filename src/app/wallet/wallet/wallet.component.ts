import { Component, OnInit } from '@angular/core';
import { Observable, of, take } from 'rxjs';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
})
export class WalletComponent implements OnInit {
  payments$: Observable<any> = of();

  constructor() {}

  ngOnInit(): void {}
}
