import {Component, Input, OnInit} from '@angular/core';
import {AuthentificateService} from "../../../services/authentificate.service";
import {User} from "../../../models/User";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public authentificateForm;
  hide = true;

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
