import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validator, Validators} from "@angular/forms";
import {RegistrationService} from "../../common/service/registration.service";
import {User} from "../../common/models/User";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public registrationForm;

  constructor(private registrationService:RegistrationService) { this.registrationForm = new FormBuilder().group({
    lastName:["", Validators.compose([Validators.required])],
    firstName:["", Validators.compose([Validators.required])],
    email:["", Validators.compose([Validators.email, Validators.required])],
    phoneNumber:["", Validators.compose([Validators.required, Validators.pattern('^0[0-9]([0-9]{2}){4}$')])],
    password:["", Validators.compose([Validators.required])],
    confirmPassword:["", Validators.compose([Validators.required])]
  })}

  ngOnInit(): void {
  }

  async submit() {

    if (this.registrationForm.valid && (this.registrationForm.value.password == this.registrationForm.value.confirmPassword)) {
      try{
        delete this.registrationForm.value.confirmPassword;
        const user =await this.registrationForm.value as User;
        console.log(this.registrationService.getRegistration(user));
      }
      catch (error){
        console.log(error);
      }
    }
  }

}
