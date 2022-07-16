import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-paybill',
  templateUrl: './paybill.component.html',
  styleUrls: ['./paybill.component.scss'],
})
export class PaybillComponent implements AfterViewInit {
  iMinStore = false;
  makeChanges = false;
  show = false;

  @ViewChild('aditya') aditya!: ElementRef;

  constructor(private changedet: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      console.log(this.aditya.nativeElement);

      this.aditya.nativeElement.focus();
      // alert('asd');
      console.log(this.aditya.nativeElement);

      this.changedet.detectChanges();

      // this.elementRef.nativeElement
    }, 3000);
  }
}
