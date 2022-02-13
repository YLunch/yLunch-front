import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {User} from "../../models/User";
import {AuthentificateService} from "../../service/authentificate.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public authentificateForm;

  constructor(private authentificateService: AuthentificateService) {
    this.authentificateForm = new FormBuilder().group({
      email: ["", Validators.compose([Validators.required])],
      password: ["", Validators.compose([Validators.required])],

    })
  }

  ngOnInit(): void {
  }

  async submit() {
    if (this.authentificateForm.valid) {
      try {
        const user = await this.authentificateForm.value as User;
        console.log(user);
        this.authentificateService.getAuthentificate(user);
      } catch (error) {
        console.log(error);
      }
    }
  }

}
