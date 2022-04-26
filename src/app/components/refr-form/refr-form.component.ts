import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-refr-form',
  templateUrl: './refr-form.component.html',
  styleUrls: ['./refr-form.component.scss'],
})
export class RefrFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  name = new FormControl('', [Validators.required, Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required, Validators.minLength(10)]);
  ogname = new FormControl('', [Validators.required, Validators.required]);
  msg = new FormControl('', [Validators.required, Validators.required]);

  getErrorMessage() {
    if (this.name.hasError('required')) {
      return 'You must enter a name';
    }

    return this.name.hasError('name') ? 'Not a valid name' : '';
  }
  getErrorMessage1() {
    if (this.name.hasError('required')) {
      return 'You must enter a email';
    }

    return this.name.hasError('email') ? 'Not a valid email' : '';
  }
  getErrorMessage2() {
    if (this.name.hasError('required')) {
      return 'You must enter a phone';
    }

    return this.name.hasError('phone') ? 'Not a valid phone' : '';
  }
  getErrorMessage3() {
    if (this.name.hasError('required')) {
      return 'You must enter a Organization Name ';
    }

    return this.name.hasError('Organization Name')
      ? 'Not a valid Organization Name'
      : '';
  }

  getErrorMessage4() {
    if (this.name.hasError('required')) {
      return 'You must enter a Message ';
    }

    return this.name.hasError('Message') ? 'Not a valid Message' : '';
  }
}
