import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreaEditorValidationComponent } from './text-area-editor-validation.component';

describe('TextAreaEditorValidationComponent', () => {
  let component: TextAreaEditorValidationComponent;
  let fixture: ComponentFixture<TextAreaEditorValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAreaEditorValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAreaEditorValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
