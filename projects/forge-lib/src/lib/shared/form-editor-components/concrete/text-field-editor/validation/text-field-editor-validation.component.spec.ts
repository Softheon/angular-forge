import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFieldEditorValidationComponent } from './text-field-editor-validation.component';

describe('TextFieldEditorValidationComponent', () => {
  let component: TextFieldEditorValidationComponent;
  let fixture: ComponentFixture<TextFieldEditorValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextFieldEditorValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFieldEditorValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
