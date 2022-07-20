import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-paybill',
  templateUrl: './paybill.component.html',
  styleUrls: ['./paybill.component.scss'],
})
export class PaybillComponent implements AfterViewInit {
  // pay?: number;

  iMinStore = false;
  makeChanges = false;
  show = false;

  @ViewChild('aditya') aditya!: ElementRef;

  form: FormGroup = new FormGroup({});

  constructor(private changedet: ChangeDetectorRef, private fb: FormBuilder) {
    console.log(this.form.value.amount);

    this.form = this.fb.group({
      amount: this.fb.control('', [Validators.minLength(1)]),
    });
  }

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

  payed() {
    console.log(this.form.value.amount);
  }
}
