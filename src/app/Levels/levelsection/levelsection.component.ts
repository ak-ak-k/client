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
        // level: '2/10',
        levelstep: 7,
        cardClass: 'card1',
        className: '',
        classname2: 'progressbar' + (7).toString(),
      },
      {
        title: 'Refr cash earned',
        imgurl: 'assets/aditya/badges/B22.webp',
        // level: '1400',
        levelstep: 1800,
        cardClass: 'card2',
        className: 'p1',
        classname2: 'progressbar' + (4).toString(),
      },
      {
        title: 'Recommendations used',
        imgurl: 'assets/aditya/badges/B23.webp',
        // level: '5/10',
        levelstep: 1,
        cardClass: 'card3',
        className: 'p2',
        classname2: 'progressbar' + (1).toString(),
      }
    );
  }

  ngOnInit(): void {}
}
