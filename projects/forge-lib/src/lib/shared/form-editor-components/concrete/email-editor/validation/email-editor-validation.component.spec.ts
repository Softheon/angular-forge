import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailEditorValidationComponent } from './email-editor-validation.component';

describe('EmailEditorValidationComponent', () => {
  let component: EmailEditorValidationComponent;
  let fixture: ComponentFixture<EmailEditorValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailEditorValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailEditorValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
