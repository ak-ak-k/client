import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appsearch',
  templateUrl: './appsearch.component.html',
  styleUrls: ['./appsearch.component.scss'],
})
export class AppsearchComponent implements OnInit {
  search: string = '';
  @Input() type = 1;
  @Input() placeholder: string = 'Search';
  constructor() {}

  ngOnInit(): void {}
}
