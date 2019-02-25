import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IntegerDirective } from './directives/integer.directive';
import { FloatDirective } from './directives/float.directive';

import { FormRendererLibComponent } from './form-renderer-lib.component';

@NgModule({
  declarations: [
    FormRendererLibComponent,
    IntegerDirective,
    FloatDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FormRendererLibComponent]
})
export class FormRendererLibModule { }
