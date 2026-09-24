import { TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter-component';

describe('CounterComponent', () => {
  let service: CounterComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
