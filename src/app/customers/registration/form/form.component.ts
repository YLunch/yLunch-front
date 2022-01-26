import {Component, Input, OnInit} from '@angular/core';
import {RegistrationService} from "../../../common/service/registration.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() registrationForm: any;
  @Input() submitRegistation: any;

  constructor(private registrationService:RegistrationService) { }

  ngOnInit(): void {
  }

  async submit() {
    this.submitRegistation();
  }

}
