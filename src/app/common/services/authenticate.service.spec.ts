import {TestBed} from '@angular/core/testing';

import {AuthenticateService} from './authenticate.service';
import {User} from "../models/User";

describe('AuthenticateService', () => {
  let service: AuthenticateService;
  //let user:Users;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
