import {Component, Input, OnInit} from '@angular/core';
import {RegistrationService} from "../../../service/registration.service";
import {AuthentificateService} from "../../../service/authentificate.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() authentificateForm: any;
  @Input() submitAuthentificate: any;

  constructor(private authentificateService:AuthentificateService) { }

  ngOnInit(): void {
  }

  async submit() {
    this.submitAuthentificate();
  }

}
