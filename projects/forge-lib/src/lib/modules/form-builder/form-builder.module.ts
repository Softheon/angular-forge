import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';

import { BuilderComponent } from './components/builder/builder.component';
import { TextFieldComponent } from '../../shared/form-components/concrete/text-field/text-field.component';
import { TextFieldEditorComponent } from '../../shared/form-editor-components/concrete/text-field-editor/text-field-editor.component';
import { ForgeComponent } from '../../shared/form-components/concrete/forge-component/forge-component.component';
import { NumberComponent } from '../../shared/form-components/concrete/number/number.component';
import { NumberDirective } from '../../shared/directives/number.directive';
import { MaxValidatorDirective } from '../../shared/validators/maxValidator';
import { MinValidatorDirective } from '../../shared/validators/minValidator';
import { FieldEditorComponent } from '../form-builder/components/field-editor/field-editor.component';
import { TextAreaComponent } from '../../shared/form-components/concrete/text-area/text-area.component';
import { CheckboxComponent } from '../../shared/form-components/concrete/checkbox/checkbox.component';
import { NumberEditorComponent } from '../../shared/form-editor-components/concrete/number-editor/number-editor.component';
import { TextAreaEditorComponent } from '../../shared/form-editor-components/concrete/text-area-editor/text-area-editor.component';
import { CheckboxEditorComponent } from '../../shared/form-editor-components/concrete/checkbox-editor/checkbox-editor.component';

@NgModule({
  declarations: [
    BuilderComponent,
    TextFieldComponent,
    TextFieldEditorComponent,
    NumberComponent,
    NumberEditorComponent,
    ForgeComponent,
    NumberDirective,
    MaxValidatorDirective,
    MinValidatorDirective,
    FieldEditorComponent,
    TextAreaComponent,
    TextAreaEditorComponent,
    CheckboxComponent,
    CheckboxEditorComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatDialogModule,
    FormsModule
  ],
  exports: [
    BuilderComponent,
    FieldEditorComponent
  ],
  entryComponents: [
    TextFieldComponent,
    TextFieldEditorComponent,
    NumberComponent,
    NumberEditorComponent,
    FieldEditorComponent,
    TextAreaComponent,
    TextAreaEditorComponent,
    CheckboxComponent,
    CheckboxEditorComponent
  ]
})
export class FormBuilderModule { }
