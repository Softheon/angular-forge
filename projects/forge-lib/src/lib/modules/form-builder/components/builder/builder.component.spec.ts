import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialogModule } from '@angular/material'
import { MatDialogRef } from '@angular/material';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

import { FormsService } from '../../../../core/services/forms.service';

import { BuilderComponent } from './builder.component';

import { formsServiceMock } from '../../../../core/mocks/formsServiceMock';
import { Form } from '../../../../shared/models/form';
import { ComponentTypes } from '../../../../shared/constants/component-types';

@Component({
  selector: 'forge-text-field',
  template: '<div> </div>'
})
export class TextFieldComponent { }

@Component({
  selector: 'forge-renderer-text-field-editor-data',
  template: '<div> </div>'
})
export class TextFieldEditorDataComponent { }

@Component({
  selector: 'forge-renderer-text-field-editor-display',
  template: '<div> </div>',
})
export class TextFieldEditorDisplayComponent { }

@Component({
  selector: 'forge-renderer-text-field-editor-validation',
  template: '<div></div>',
})
export class TextFieldEditorValidationComponent { }

@Component({
  selector: 'forge-renderer-field-editor',
  template: '<div> </div>',
})
export class FieldEditorComponent { }

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
        FormsModule
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
    component.addComponent(new TextFieldComponent(), 'any');
    expect(component.formsService.form.components.length).toBeGreaterThan(0);
  });

  it('should have 0 components after adding one then deleting one in forgeComponents', () => {
    component.addComponent(new TextFieldComponent(), 'any');
    component.formsService.form.components[0].id  = 'test';
    component.selectedComponent = component.formsService.form.components[0];
    component.deleteComponent();
    expect(component.formsService.form.components.length).toBe(0);
  });

  // it('calls without throwing error on edit', () => {
  //   component.addComponent(new TextFieldComponent(), "any");
  //   component.editComponent(0);
  //   expect(component).toBeTruthy();
  // });

  it('generate all component types', () => {
    component.generateComponent(ComponentTypes.TextField);
    component.generateComponent(ComponentTypes.NumberField);
    component.generateComponent(ComponentTypes.TextArea);
    component.generateComponent(ComponentTypes.Checkbox);
    component.generateComponent(ComponentTypes.Rating);
    component.generateComponent(ComponentTypes.Email);
    component.generateComponent(ComponentTypes.Attachment);
    component.generateComponent(ComponentTypes.CheckboxGroup);
    component.generateComponent(ComponentTypes.Currency);
    component.generateComponent(ComponentTypes.DateTime);
    component.generateComponent(ComponentTypes.PhoneNumber);
    expect(component.formsService.form.components.length).toBe(component.components.length);
  });

  it('should create new form', () => {
    component.createNewForm();
    expect(component.formsService.form.name).toBe('New Form');
  });
});
