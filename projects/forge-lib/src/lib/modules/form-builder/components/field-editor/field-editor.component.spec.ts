import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FieldEditorComponent } from './field-editor.component';
import { TextFieldComponent } from '../../../../shared/form-components/concrete/text-field/text-field.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { TextFieldEditorDisplayComponent } from '../../../../shared/form-editor-components/concrete/text-field-editor/display/text-field-editor-display.component';
import { TextFieldEditorDataComponent } from '../../../../shared/form-editor-components/concrete/text-field-editor/data/text-field-editor-data.component';
import { TextFieldEditorValidationComponent } from '../../../../shared/form-editor-components/concrete/text-field-editor/validation/text-field-editor-validation.component';

describe('FieldEditorComponent', () => {
  let component: FieldEditorComponent;
  let fixture: ComponentFixture<FieldEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FieldEditorComponent,
        TextFieldEditorDisplayComponent,
        TextFieldEditorDataComponent,
        TextFieldEditorValidationComponent
      ],
      imports: [
        FormsModule
      ],
      schemas:[
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { field: new TextFieldComponent() } },
        { provide: MatDialogRef, useValue: {} }
      ]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [
          TextFieldEditorDisplayComponent,
          TextFieldEditorDataComponent,
          TextFieldEditorValidationComponent
        ]
      }
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
