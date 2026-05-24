import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-group-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './group-form.html',
  styleUrl: './group-form.css',
})
export class GroupForm {

  loginForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required])
  });

  get name(){
    return this.loginForm.get("name");
  }

  get email(){
    return this.loginForm.get("email");
  }
  get password(){
    return this.loginForm.get("password");
  }

  handleProfile() {
    console.log(this.loginForm.value);
  }

  reset() {
    this.loginForm.reset();
  }
}