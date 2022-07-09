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
        imgurl: 'assets/aditya/badges/B20.webp',
        level: '2/10',
        levelstep: 1,
        className: 'card',
      },
      {
        title: 'Refr cash earned',
        imgurl: 'assets/aditya/badges/B19.webp',
        level: '1400',
        levelstep: 2,
        className: 'card',
      },
      {
        title: 'Stores shared',
        imgurl: 'assets/aditya/badges/B13.webp',
        level: '5/10',
        levelstep: 3,
        className: 'card',
      }
    );
  }

  ngOnInit(): void {}
}
