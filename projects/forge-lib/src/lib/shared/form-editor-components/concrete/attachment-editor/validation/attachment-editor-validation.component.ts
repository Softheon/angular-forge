import { Component, OnInit, OnDestroy } from '@angular/core';

import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';
import { AttachmentComponent } from '../../../../form-components/concrete/attachment/attachment.component';
import { mimeType } from '../../../../form-components/concrete/attachment/mimeTypes';

@Component({
  selector: 'forge-renderer-attachment-editor-validation',
  templateUrl: './attachment-editor-validation.component.html',
  styleUrls: ['./attachment-editor-validation.component.scss']
})
export class AttachmentEditorValidationComponent extends FormEditorDisplayComponent implements OnInit, OnDestroy {
  /**
   * The attachment component
   */
  public component: AttachmentComponent;

  /**
   * The available mime types
   */
  public mimeTypes = [];

  /**
   * The selected file extensions
   */
  public selectedFileExtensions: string;

  /**
   * Initializes the component
   */
  public ngOnInit(): void {
    for (const key in mimeType) {
      if (mimeType.hasOwnProperty(key)) {
        this.mimeTypes.push([key]);
      }
    }
  }

  /**
   * Destroys the component
   */
  public ngOnDestroy(): void {
    this.component.validation.allowedFileExtensions = [];
    if (!this.selectedFileExtensions) {
      return;
    }
    this.selectedFileExtensions.split(',').forEach(extension => {
      if (mimeType[extension.trim()]) {
        this.component.validation.allowedFileExtensions.push(extension);
      }
    });

    this.component.initializeUploader();
  }
}
