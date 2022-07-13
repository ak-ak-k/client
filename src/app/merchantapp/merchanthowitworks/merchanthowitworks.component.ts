import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merchanthowitworks',
  templateUrl: './merchanthowitworks.component.html',
  styleUrls: ['./merchanthowitworks.component.scss'],
})
export class MerchanthowitworksComponent implements OnInit {
  howitoworks: Array<any> = [];

  constructor() {
    this.howitoworks.push(
      {
        title: 'What is Refr?',
      },
      {
        title: 'How Refr works?',
      },
      {
        title: 'How to use Refr ?',
      },
      {
        title: 'Refr Campaigns & Rewards',
      },
      {
        title: 'Refr Wallets ',
      },
      {
        title: 'Redeem requests and Recent orders',
      },
      {
        title: 'Recent Orders ',
      },
      {
        title: 'Product cataloguing ',
      },
      {
        title: 'Customers',
      },
      {
        title: 'How Refr makes it easy for you to work with influencers?',
      },
      {
        title: 'Refer a merchant & earn',
      }
    );
  }

  ngOnInit(): void {}
}
