import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumberEditorValidationComponent } from './phone-number-editor-validation.component';

describe('PhoneNumberEditorValidationComponent', () => {
  let component: PhoneNumberEditorValidationComponent;
  let fixture: ComponentFixture<PhoneNumberEditorValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneNumberEditorValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneNumberEditorValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
