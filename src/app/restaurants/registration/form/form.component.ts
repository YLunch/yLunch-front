import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../common/models/User';
import {RegistrationService} from '../../../common/services/registration.service';
import {MustMatch} from "../../../helpers/must-match.validator";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  registrationForm: FormGroup;
  hide = true;

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
        validators: MustMatch('password', 'confirmPassword'),
      }
    );
  }

  ngOnInit(): void {
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
