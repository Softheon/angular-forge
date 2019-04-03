import { Component, OnInit } from '@angular/core';
import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';
import { EmailComponent } from '../../../../form-components/concrete/email/email.component';

@Component({
  selector: 'forge-renderer-email-editor-validation',
  templateUrl: './email-editor-validation.component.html',
  styleUrls: ['./email-editor-validation.component.css']
})
export class EmailEditorValidationComponent extends FormEditorDisplayComponent implements OnInit {

  public component: EmailComponent;
  
  ngOnInit() {
  }

}
