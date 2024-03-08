import { TestBed } from '@angular/core/testing';

import { CheckingPasswordService } from './checking-password.service';

describe('CheckingPasswordService', () => {
  let service: CheckingPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckingPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
