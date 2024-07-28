import { TestBed } from '@angular/core/testing';

import { UserAuthencticationService } from './user-authenctication.service';

describe('UserAuthencticationService', () => {
  let service: UserAuthencticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAuthencticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
