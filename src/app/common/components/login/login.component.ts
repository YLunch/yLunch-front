import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {User} from "src/app/common/models/User";
import {AuthenticateService} from "src/app/common/services/authenticate.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() {
  }


  ngOnInit(): void {
  }

}
