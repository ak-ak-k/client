import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-levelsection',
  templateUrl: './levelsection.component.html',
  styleUrls: ['./levelsection.component.scss'],
})
export class LevelsectionComponent implements OnInit {
  levels: Array<any> = [];

  constructor() {
    this.levels.push(
      {
        title: 'Stores shared',
        imgurl: 'assets/aditya/badges/B24.webp',
        level: '2/10',
        levelstep: 1,
        cardClass: 'card1',
        className: '',
      },
      {
        title: 'Refr cash earned',
        imgurl: 'assets/aditya/badges/B22.webp',
        level: '1400',
        levelstep: 2,
        cardClass: 'card2',
        className: 'p1',
      },
      {
        title: 'Stores shared',
        imgurl: 'assets/aditya/badges/B23.webp',
        level: '5/10',
        levelstep: 3,
        cardClass: 'card3',
        className: 'p2',
      }
    );
  }

  ngOnInit(): void {}
}
