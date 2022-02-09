import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../common/models/User';
import { RegistrationService } from '../../../common/service/registration.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() registrationForm: any;

  constructor(private registrationService: RegistrationService) {
    this.registrationForm = new FormBuilder().group(
      {
        lastName: ['', Validators.compose([Validators.required])],
        firstName: ['', Validators.compose([Validators.required])],
        email: [
          '',
          Validators.compose([Validators.email, Validators.required]),
        ],
        phoneNumber: [
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern('^0[0-9]([0-9]{2}){4}$'),
          ]),
        ],
        password: ['', Validators.compose([Validators.required])],
        confirmPassword: ['', Validators.compose([Validators.required])],
      },
      {
        validators: this.MustMatch('password', 'confirmPassword'),
      }
    );
  }

  ngOnInit(): void {}

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors['MustMatch']) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ MustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  async submit() {
    if (this.registrationForm.valid) {
      try {
        delete this.registrationForm.value.confirmPassword;
        const user = this.registrationForm.value as User;
        console.log(await this.registrationService.getRegistration(user));
      } catch (error) {
        console.log(error);
      }
    }
  }
}
