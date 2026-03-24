import { TestBed } from '@angular/core/testing';
import { storeService } from './store-service';


describe('Store', () => {
  let service: storeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(storeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
