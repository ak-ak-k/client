import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-paybill',
  templateUrl: './paybill.component.html',
  styleUrls: ['./paybill.component.scss'],
})
export class PaybillComponent implements AfterViewInit {
  iMinStore = false;
  makeChanges = false;
  show = false;

  // @ViewChild("input") private _inputs: ElementRef;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.focus();
  }
}
