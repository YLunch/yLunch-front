import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public registrationForm;

  constructor() { this.registrationForm = new FormBuilder().group({
    lastName:["", Validators.compose([Validators.required])],
    firstName:["", Validators.compose([Validators.required])],
    email:["", Validators.compose([Validators.email, Validators.required])],
    phone:["", Validators.compose([Validators.required, Validators.pattern('^0[0-9]([0-9]{2}){4}$')])],
    password:["", Validators.compose([Validators.required])],
    confirmPassword:["", Validators.compose([Validators.required])]
  })}

  ngOnInit(): void {
  }

  submit() {

    if (this.registrationForm.valid){
      console.log(this.registrationForm.value);
      if (this.checkPassword()){
        console.log('password identique');
      }
    }
  }

  checkPassword(){
    return this.registrationForm.value.password == this.registrationForm.value.confirmPassword;
  }
}
