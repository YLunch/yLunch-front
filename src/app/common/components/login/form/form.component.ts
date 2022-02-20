import {Component, Input, OnInit} from '@angular/core';
import {AuthenticateService} from "src/app/common/services/authenticate.service";
import {User} from "src/app/common/models/User";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public authenticateForm;
  hide = true;

  constructor(private authenticateService: AuthenticateService) {
    this.authenticateForm = new FormBuilder().group({
      email: ["", Validators.compose([Validators.required])],
      password: ["", Validators.compose([Validators.required])],
    })
  }

  ngOnInit(): void {
  }

  async submit() {
    if (this.authenticateForm.valid) {
      try {
        const user = await this.authenticateForm.value as User;
        console.log(user);
        this.authenticateService.getAuthenticate(user);
      } catch (error) {
        console.log(error);
      }
    }
  }

}
