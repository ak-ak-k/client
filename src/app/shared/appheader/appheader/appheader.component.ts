import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.scss'],
})
export class AppheaderComponent implements OnInit {
  @Input() type: number = 1;

  constructor() {}

  ngOnInit(): void {}
}
