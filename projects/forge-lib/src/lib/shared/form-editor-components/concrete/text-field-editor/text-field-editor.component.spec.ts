import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { TextFieldEditorComponent } from './text-field-editor.component';
import { TextFieldComponent } from '../../../form-components/concrete/text-field/text-field.component';

describe('TextFieldEditorComponent', () => {
  let component: TextFieldEditorComponent;
  let fixture: ComponentFixture<TextFieldEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TextFieldEditorComponent ,
        TextFieldComponent
      ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFieldEditorComponent);
    component = fixture.componentInstance;
    component.component = new TextFieldComponent();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
