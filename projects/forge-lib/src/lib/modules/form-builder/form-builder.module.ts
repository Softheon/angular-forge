import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from'@angular/platform-browser/animations';

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
import { RatingEditorDisplayComponent } from '../../shared/form-editor-components/concrete/rating-editor/display/rating-editor-display.component';
import { EmailEditorDisplayComponent } from '../../shared/form-editor-components/concrete/email-editor/display/email-editor-display.component';
import { TextFieldEditorDataComponent } from '../../shared/form-editor-components/concrete/text-field-editor/data/text-field-editor-data.component';
import { TextFieldEditorValidationComponent } from '../../shared/form-editor-components/concrete/text-field-editor/validation/text-field-editor-validation.component';
import { NumberEditorDataComponent } from '../../shared/form-editor-components/concrete/number-editor/data/number-editor-data.component';
import { NumberEditorValidationComponent } from '../../shared/form-editor-components/concrete/number-editor/validation/number-editor-validation.component';
import { TextAreaEditorDataComponent } from '../../shared/form-editor-components/concrete/text-area-editor/data/text-area-editor-data.component';
import { TextAreaEditorValidationComponent } from '../../shared/form-editor-components/concrete/text-area-editor/validation/text-area-editor-validation.component';
import { CheckboxEditorDataComponent } from '../../shared/form-editor-components/concrete/checkbox-editor/data/checkbox-editor-data.component';
import { CheckboxEditorValidationComponent } from '../../shared/form-editor-components/concrete/checkbox-editor/validation/checkbox-editor-validation.component';
import { RatingEditorDataComponent } from '../../shared/form-editor-components/concrete/rating-editor/data/rating-editor-data.component';
import { RatingEditorValidationComponent } from '../../shared/form-editor-components/concrete/rating-editor/validation/rating-editor-validation.component';
import { EmailEditorDataComponent } from '../../shared/form-editor-components/concrete/email-editor/data/email-editor-data.component';
import { EmailEditorValidationComponent } from '../../shared/form-editor-components/concrete/email-editor/validation/email-editor-validation.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    BuilderComponent,
    TextFieldComponent,
    TextFieldEditorDisplayComponent,
    TextFieldEditorDataComponent,
    TextFieldEditorValidationComponent,
    NumberComponent,
    NumberEditorDisplayComponent,
    NumberEditorDataComponent,
    NumberEditorValidationComponent,
    ForgeComponent,
    NumberDirective,
    MaxValidatorDirective,
    MinValidatorDirective,
    FieldEditorComponent,
    TextAreaComponent,
    TextAreaEditorDisplayComponent,
    TextAreaEditorDataComponent,
    TextAreaEditorValidationComponent,
    CheckboxComponent,
    CheckboxEditorDisplayComponent,
    CheckboxEditorDataComponent,
    CheckboxEditorValidationComponent,
    RatingComponent,
    RatingEditorDisplayComponent,
    RatingEditorDataComponent,
    RatingEditorValidationComponent,
    EmailComponent,
    EmailEditorDisplayComponent,
    EmailEditorDataComponent,
    EmailEditorValidationComponent
  ],
  imports: [
    BrowserModule,
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
    TextFieldEditorDataComponent,
    TextFieldEditorValidationComponent,
    NumberComponent,
    NumberEditorDisplayComponent,
    NumberEditorDataComponent,
    NumberEditorValidationComponent,
    FieldEditorComponent,
    TextAreaComponent,
    TextAreaEditorDisplayComponent,
    TextAreaEditorDataComponent,
    TextAreaEditorValidationComponent,
    CheckboxComponent,
    CheckboxEditorDisplayComponent,
    CheckboxEditorDataComponent,
    CheckboxEditorValidationComponent,
    RatingComponent,
    RatingEditorDisplayComponent,
    RatingEditorDataComponent,
    RatingEditorValidationComponent,
    EmailComponent,
    EmailEditorDisplayComponent,
    EmailEditorDataComponent,
    EmailEditorValidationComponent
  ]
})
export class FormBuilderModule { }
