import { Component } from '@angular/core';

import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';
import { AttachmentComponent } from '../../../../form-components/concrete/attachment/attachment.component';

@Component({
  selector: 'forge-renderer-attachment-editor-display',
  templateUrl: './attachment-editor-display.component.html',
  styleUrls: ['./attachment-editor-display.component.scss']
})
export class AttachmentEditorDisplayComponent extends FormEditorDisplayComponent {

  /**
   * The attachment component
   */
  public component: AttachmentComponent;
}
