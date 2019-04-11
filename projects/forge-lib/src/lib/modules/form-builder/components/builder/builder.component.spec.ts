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
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

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
    expect(component.forgeComponents.length).toBeGreaterThan(0);
  });

  it('should have 0 components after adding one then deleting one in forgeComponents', () => {
    component.addComponent(new TextFieldComponent(), 'any');
    component.deleteComponent(0);
    expect(component.forgeComponents.length).toBe(0);
  })

  // it('calls without throwing error on edit', () => {
  //   component.addComponent(new TextFieldComponent(), "any");
  //   component.editComponent(0);
  //   expect(component).toBeTruthy();
  // });

  it('generate all component types', () => {
    component.generateComponent('Text Field');
    component.generateComponent('Number Field');
    component.generateComponent('Text Area');
    component.generateComponent('Checkbox');
    component.generateComponent('Rating');
    component.generateComponent('Email');
    component.generateComponent('Attachment');
    expect(component.forgeComponents.length).toBe(component.components.length);
  });
});

import { Component } from '@angular/core';

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
