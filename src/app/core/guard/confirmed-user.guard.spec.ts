import { TestBed } from '@angular/core/testing';

import { ConfirmedUserGuard } from './confirmed-user.guard';

describe('ConfirmedUserGuard', () => {
  let guard: ConfirmedUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConfirmedUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
