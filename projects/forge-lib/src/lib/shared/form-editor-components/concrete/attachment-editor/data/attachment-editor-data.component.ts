import { Component } from '@angular/core';

import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';
import { AttachmentComponent } from '../../../../form-components/concrete/attachment/attachment.component';

@Component({
  selector: 'forge-renderer-attachment-editor-data',
  templateUrl: './attachment-editor-data.component.html',
  styleUrls: ['./attachment-editor-data.component.scss']
})
export class AttachmentEditorDataComponent extends FormEditorDisplayComponent {

  /**
   * The attachment component
   */
  public component: AttachmentComponent;

}
