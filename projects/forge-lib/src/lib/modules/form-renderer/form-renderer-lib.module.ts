import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IntegerDirective } from '../../shared/directives/integer.directive';
import { FloatDirective } from '../../shared/directives/float.directive';

import { FormRendererLibComponent } from './components/form-renderer/form-renderer-lib.component';
import { CustomFormRendererLibComponent } from './components/custom-form-renderer/custom-form-renderer-lib.component';
import { FormBuilderComponentsModule } from '../form-builder/form-builder-components.module';
import { MatInputModule, MatFormFieldModule, MatOptionModule, MatSelectModule } from '@angular/material';

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
    FormBuilderComponentsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule
  ],
  exports: [
    FormRendererLibComponent,
    CustomFormRendererLibComponent
  ]
})
export class FormRendererLibModule { }
