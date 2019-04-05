import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialogModule } from '@angular/material'
import { MatDialogRef } from '@angular/material';

import { FormsService } from '../../../../core/services/forms.service';

import { BuilderComponent } from './builder.component';

import { formsServiceMock } from '../../../../core/mocks/formsServiceMock';
import { FormsModule } from '@angular/forms';

import { Form } from 'projects/forge-lib/src/lib/shared/models/form';
import { TextFieldComponent } from '../../../../shared/form-components/concrete/text-field/text-field.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { TextFieldEditorDisplayComponent } from '../../../../shared/form-editor-components/concrete/text-field-editor/display/text-field-editor-display.component';
import { TextFieldEditorDataComponent } from '../../../../shared/form-editor-components/concrete/text-field-editor/data/text-field-editor-data.component';
import { TextFieldEditorValidationComponent } from '../../../../shared/form-editor-components/concrete/text-field-editor/validation/text-field-editor-validation.component';
import { FieldEditorComponent } from '../field-editor/field-editor.component';


describe('BuilderComponent', () => {
  let component: BuilderComponent;
  let fixture: ComponentFixture<BuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BuilderComponent,
        TextFieldComponent,
        TextFieldEditorDisplayComponent,
        TextFieldEditorDataComponent,
        TextFieldEditorValidationComponent,
        FieldEditorComponent
      ],
      imports: [
        DragDropModule,
        MatDialogModule,
        FormsModule,
        BrowserAnimationsModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        { provide: FormsService, useValue: formsServiceMock },
        { provide: MatDialogRef, useValue: {} }
      ]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [
          TextFieldEditorDisplayComponent,
          TextFieldEditorDataComponent,
          TextFieldEditorValidationComponent,
          FieldEditorComponent
        ]
      }
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderComponent);
    component = fixture.componentInstance;
    component.formsService.form = new Form();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('noReturnPredicate should be false', () => {
    expect(component.noReturnPredicate()).toBe(false);
  });

  it('should have more than one item in forgeComponents after addComponent()', () => {
    component.addComponent(new TextFieldComponent(), "any");
    expect(component.forgeComponents.length).toBeGreaterThan(0);
  });

  it('should have 0 components after adding one then deleting one in forgeComponents', () => {
    component.addComponent(new TextFieldComponent(), "any");
    component.deleteComponent(0);
    expect(component.forgeComponents.length).toBe(0);
  })

  it('calls without throwing error on edit', () => {
    component.addComponent(new TextFieldComponent(), "any");
    component.editComponent(0);
    expect(component).toBeTruthy();
  });

  it('generate all component types', () => {
    component.generateComponent("Text Field");
    component.generateComponent("Number Field");
    component.generateComponent("Text Area");
    component.generateComponent("Checkbox");
    component.generateComponent("Rating");
    component.generateComponent("Email");
    expect(component.forgeComponents.length).toBe(component.components.length);
  });
});
