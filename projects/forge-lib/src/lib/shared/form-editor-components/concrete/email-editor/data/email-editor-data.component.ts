import { Component, OnInit } from '@angular/core';
import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';
import { EmailComponent } from '../../../../form-components/concrete/email/email.component';

@Component({
  selector: 'forge-renderer-email-editor-data',
  templateUrl: './email-editor-data.component.html',
  styleUrls: ['./email-editor-data.component.css']
})
export class EmailEditorDataComponent extends FormEditorDisplayComponent implements OnInit {

  public component: EmailComponent;

  ngOnInit() {
  }

}
