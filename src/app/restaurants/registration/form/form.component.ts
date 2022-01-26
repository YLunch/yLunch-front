import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public registrationForm;

  constructor() {
    this.registrationForm = new FormBuilder().group({
      lastName:["", Validators.compose([Validators.required])],
      firstName:["", Validators.compose([Validators.required])],
      email:["", Validators.compose([Validators.email, Validators.required])],
      phone:["", Validators.compose([Validators.required, Validators.pattern('^0[0-9]([0-9]{2}){4}$')])],
      password:["", Validators.compose([Validators.required])],
      confirmPassword:["", Validators.compose([Validators.required])]
    })
  }

  ngOnInit(): void {
  }

  submit() {

  }
}
