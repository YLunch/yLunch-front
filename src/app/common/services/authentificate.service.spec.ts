import {TestBed} from '@angular/core/testing';

import {AuthentificateService} from './authentificate.service';
import {User} from "../models/User";

describe('AuthentificateService', () => {
  let service: AuthentificateService;
  //let user:Users;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentificateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
