import { TestBed } from '@angular/core/testing';
import { ConditionalService } from './conditional.service';

describe('ConditionalService', () => {
  let conditionalService: ConditionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ConditionalService
      ]
    });

    conditionalService = TestBed.get(ConditionalService);
  });

  it('should be created', () => {
    expect(conditionalService).toBeTruthy();
  });
});
