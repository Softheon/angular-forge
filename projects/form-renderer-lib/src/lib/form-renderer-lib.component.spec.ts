import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRendererLibComponent } from './form-renderer-lib.component';

describe('FormRendererLibComponent', () => {
  let component: FormRendererLibComponent;
  let fixture: ComponentFixture<FormRendererLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRendererLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRendererLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
