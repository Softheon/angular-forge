import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IntegerDirective } from '../../shared/directives/integer.directive';
import { FloatDirective } from '../../shared/directives/float.directive';

import { FormRendererLibComponent } from './components/form-renderer/form-renderer-lib.component';
import { CustomFormRendererLibComponent } from './components/custom-form-renderer/custom-form-renderer-lib.component';
import { FieldEditorComponent } from '../form-builder/components/field-editor/field-editor.component';
import { FormBuilderComponentsModule } from '../form-builder/form-builder-components.module';

@NgModule({
  declarations: [
    FormRendererLibComponent,
    IntegerDirective,
    FloatDirective,
    CustomFormRendererLibComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormBuilderComponentsModule
  ],
  exports: [
    FormRendererLibComponent,
    CustomFormRendererLibComponent
  ],
  entryComponents: [
    FieldEditorComponent
  ]
})
export class FormRendererLibModule { }
