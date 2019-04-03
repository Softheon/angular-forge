import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFieldEditorValidationComponent } from './text-field-editor-validation.component';
import { TextFieldComponent } from '../../../../form-components/concrete/text-field/text-field.component';
import { FormsModule } from '@angular/forms';

describe('TextFieldEditorValidationComponent', () => {
  let component: TextFieldEditorValidationComponent;
  let fixture: ComponentFixture<TextFieldEditorValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TextFieldEditorValidationComponent,
        TextFieldComponent
      ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFieldEditorValidationComponent);
    component = fixture.componentInstance;
    component.component = new TextFieldComponent();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
