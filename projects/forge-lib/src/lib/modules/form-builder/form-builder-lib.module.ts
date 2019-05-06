import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from'@angular/platform-browser/animations';

import { FormBuilderComponentsModule } from './form-builder-components.module';
import { FormBuilderEditorsModule } from './form-builder-editors.module';

import { BuilderComponent } from './components/builder/builder.component';
import { FieldEditorComponent } from './components/field-editor/field-editor.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    BuilderComponent,
    FieldEditorComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatDialogModule,
    MatTabsModule,
    FormsModule,
    FormBuilderComponentsModule,
    FormBuilderEditorsModule
  ],
  exports: [
    BuilderComponent,
    FieldEditorComponent
  ],
  entryComponents: [
    FieldEditorComponent
  ]
})
export class FormBuilderLibModule { }
