import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { FieldEditorComponent } from './field-editor.component';
import { TextFieldComponent } from '../../../../shared/form-components/concrete/text-field/text-field.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { TextFieldEditorComponent } from '../../../../shared/form-editor-components/concrete/text-field-editor/text-field-editor.component';


describe('FieldEditorComponent', () => {
  let component: FieldEditorComponent;
  let fixture: ComponentFixture<FieldEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FieldEditorComponent,
        TextFieldEditorComponent
      ],
      imports: [
        FormsModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { field: new TextFieldComponent() } },
        { provide: MatDialogRef, useValue: {} }
      ]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [TextFieldEditorComponent]
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
