import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-forms.html',
  styleUrls: ['./reactive-forms.css'],
})
export class ReactiveForms {
  email = new FormControl('');
  password = new FormControl('');

  login() {
    console.log(this.email.value, this.password.value);
  }

  reset() {
    this.email.setValue('');
    this.password.setValue('');
  }
}