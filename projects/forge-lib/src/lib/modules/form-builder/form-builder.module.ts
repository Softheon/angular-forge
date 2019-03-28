import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { BuilderComponent } from './components/builder/builder.component';
import { TextFieldFormComponent } from '../../shared/form-components/concrete/text-field-form-component/text-field.component';
import { ForgeComponent } from '../../shared/form-components/concrete/forge-component/forge-component.component';
import { NumberComponent } from '../../shared/form-components/concrete/number/number.component';
import { NumberDirective } from '../../shared/directives/number.directive';
import { MaxValidatorDirective } from '../../shared/validators/maxValidator';
import { MinValidatorDirective } from '../../shared/validators/minValidator';


@NgModule({
  declarations: [
    BuilderComponent,
    TextFieldFormComponent,
    NumberComponent,
    ForgeComponent,
    NumberDirective,
    MaxValidatorDirective,
    MinValidatorDirective
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule
  ],
  exports: [
    BuilderComponent
  ],
  entryComponents: [
    TextFieldFormComponent,
    NumberComponent
  ]
})
export class FormBuilderModule { }
