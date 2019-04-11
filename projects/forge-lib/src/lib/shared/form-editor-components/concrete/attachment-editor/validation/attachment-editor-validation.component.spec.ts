import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AttachmentEditorValidationComponent } from './attachment-editor-validation.component';
import { AttachmentValidation } from '../../../../form-components/concrete/attachment/attachment-validation';
import { AttachmentComponent } from '../../../../form-components/concrete/attachment/attachment.component';
import { FormsService } from 'forge-lib/lib/core/services/forms.service';
import { mimeType } from '../../../../form-components/concrete/attachment/mimeTypes';

describe('AttachmentEditorValidationComponent', () => {
  let component: AttachmentEditorValidationComponent;
  let fixture: ComponentFixture<AttachmentEditorValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AttachmentEditorValidationComponent
      ],
      imports: [
        FormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachmentEditorValidationComponent);
    component = fixture.componentInstance;
    component.component = new AttachmentComponent();
    component.component.validation = new AttachmentValidation();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should map file extensions on destroy', () => {
    component.selectedFileExtensions = '.docx,.pdf';
    const spy = spyOn(component.component, 'initializeUploader');
    component.ngOnDestroy();
    expect(spy).toHaveBeenCalled();
    expect(component.component.validation.allowedFileExtensions.length).toEqual(2);
  });
});
