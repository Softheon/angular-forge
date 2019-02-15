import { TestBed } from '@angular/core/testing';

import { FormRendererLibService } from './form-renderer-lib.service';

describe('FormRendererLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormRendererLibService = TestBed.get(FormRendererLibService);
    expect(service).toBeTruthy();
  });
});
