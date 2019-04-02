import { Component, OnInit } from '@angular/core';
import { EmailComponent } from '../../../../form-components/concrete/email/email.component';
import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';

@Component({
  selector: 'forge-renderer-email-editor-display',
  templateUrl: './email-editor-display.component.html',
  styleUrls: ['./email-editor-display.component.css']
})
export class EmailEditorDisplayComponent extends FormEditorDisplayComponent implements OnInit {

  public component: EmailComponent

  ngOnInit() {
  }

}
