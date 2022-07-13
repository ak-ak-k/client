import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-knowmoremerchant',
  templateUrl: './knowmoremerchant.component.html',
  styleUrls: ['./knowmoremerchant.component.scss'],
})
export class KnowmoremerchantComponent implements OnInit {
  index: number = 0;

  constructor(private actRoute: ActivatedRoute) {
    const aR = this.actRoute.snapshot.params;
    this.index = aR['id'] || null;
    console.log('id', this.index);
  }

  ngOnInit(): void {}
}
