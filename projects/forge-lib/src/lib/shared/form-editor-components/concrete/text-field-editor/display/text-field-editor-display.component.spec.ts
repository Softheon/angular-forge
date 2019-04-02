import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { TextFieldEditorDisplayComponent } from './text-field-editor-display.component';
import { TextFieldComponent } from '../../../../form-components/concrete/text-field/text-field.component';

describe('TextFieldEditorDisplayComponent', () => {
  let component: TextFieldEditorDisplayComponent;
  let fixture: ComponentFixture<TextFieldEditorDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TextFieldEditorDisplayComponent ,
        TextFieldComponent
      ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFieldEditorDisplayComponent);
    component = fixture.componentInstance;
    component.component = new TextFieldComponent();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
