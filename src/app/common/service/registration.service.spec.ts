import { TestBed } from '@angular/core/testing';

import { RegistrationService } from './registration.service';
import {User} from "../models/User";


describe('RegistrationService', () => {
  let service: RegistrationService;
  //let user: Users;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });



  it('#getValue should return real value', () => {
    const expectedHeroes: User[]=[{
      link: "ab",
      id: "ab",
      email: "ab",
      firstName : "ab",
      lastName : "ab",
      phoneNumber : "ab"
    },{
      link: "ab",
      id: "ab",
      email: "ab",
      firstName : "ab",
      lastName : "ab",
      phoneNumber : "ab"
    }];

      expect(service.getRegistration(this.registrationForm.value)).toEqual(expectedHeroes);
    });

});
