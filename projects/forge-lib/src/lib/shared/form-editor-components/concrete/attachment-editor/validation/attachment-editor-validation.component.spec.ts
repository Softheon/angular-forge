import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentEditorValidationComponent } from './attachment-editor-validation.component';

describe('AttachmentEditorValidationComponent', () => {
  let component: AttachmentEditorValidationComponent;
  let fixture: ComponentFixture<AttachmentEditorValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachmentEditorValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachmentEditorValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
