import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatTabsModule } from '@angular/material';

import { BuilderComponent } from './components/builder/builder.component';
import { TextFieldComponent } from '../../shared/form-components/concrete/text-field/text-field.component';
import { TextFieldEditorDisplayComponent } from '../../shared/form-editor-components/concrete/text-field-editor/display/text-field-editor-display.component';
import { ForgeComponent } from '../../shared/form-components/concrete/forge-component/forge-component.component';
import { NumberComponent } from '../../shared/form-components/concrete/number/number.component';
import { NumberDirective } from '../../shared/directives/number.directive';
import { MaxValidatorDirective } from '../../shared/validators/maxValidator';
import { MinValidatorDirective } from '../../shared/validators/minValidator';
import { FieldEditorComponent } from '../form-builder/components/field-editor/field-editor.component';
import { TextAreaComponent } from '../../shared/form-components/concrete/text-area/text-area.component';
import { CheckboxComponent } from '../../shared/form-components/concrete/checkbox/checkbox.component';
import { NumberEditorDisplayComponent } from '../../shared/form-editor-components/concrete/number-editor/display/number-editor-display.component';
import { TextAreaEditorDisplayComponent } from '../../shared/form-editor-components/concrete/text-area-editor/display/text-area-editor-display.component';
import { CheckboxEditorDisplayComponent } from '../../shared/form-editor-components/concrete/checkbox-editor/display/checkbox-editor-display.component';
import { RatingComponent } from '../../shared/form-components/concrete/rating/rating.component';
import { EmailComponent } from '../../shared/form-components/concrete/email/email.component';

@NgModule({
  declarations: [
    BuilderComponent,
    TextFieldComponent,
    TextFieldEditorDisplayComponent,
    NumberComponent,
    NumberEditorDisplayComponent,
    ForgeComponent,
    NumberDirective,
    MaxValidatorDirective,
    MinValidatorDirective,
    FieldEditorComponent,
    TextAreaComponent,
    TextAreaEditorDisplayComponent,
    CheckboxComponent,
    CheckboxEditorDisplayComponent,
    RatingComponent,
    EmailComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatDialogModule,
    MatTabsModule,
    FormsModule
  ],
  exports: [
    BuilderComponent,
    FieldEditorComponent
  ],
  entryComponents: [
    TextFieldComponent,
    TextFieldEditorDisplayComponent,
    NumberComponent,
    NumberEditorDisplayComponent,
    FieldEditorComponent,
    TextAreaComponent,
    TextAreaEditorDisplayComponent,
    CheckboxComponent,
    CheckboxEditorDisplayComponent,
    RatingComponent,
    EmailComponent
  ]
})
export class FormBuilderModule { }
