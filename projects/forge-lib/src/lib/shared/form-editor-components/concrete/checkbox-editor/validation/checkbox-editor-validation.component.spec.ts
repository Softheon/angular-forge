import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxEditorValidationComponent } from './checkbox-editor-validation.component';

describe('CheckboxEditorValidationComponent', () => {
  let component: CheckboxEditorValidationComponent;
  let fixture: ComponentFixture<CheckboxEditorValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxEditorValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxEditorValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
