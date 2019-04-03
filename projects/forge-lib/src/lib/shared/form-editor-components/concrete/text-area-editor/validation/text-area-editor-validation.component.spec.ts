import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreaEditorValidationComponent } from './text-area-editor-validation.component';
import { TextAreaComponent } from '../../../../form-components/concrete/text-area/text-area.component';
import { FormsModule } from '@angular/forms';

describe('TextAreaEditorValidationComponent', () => {
  let component: TextAreaEditorValidationComponent;
  let fixture: ComponentFixture<TextAreaEditorValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TextAreaEditorValidationComponent,
        TextAreaComponent
      ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAreaEditorValidationComponent);
    component = fixture.componentInstance;
    component.component = new TextAreaComponent();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
