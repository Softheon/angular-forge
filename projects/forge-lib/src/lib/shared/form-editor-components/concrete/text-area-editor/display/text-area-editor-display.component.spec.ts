import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreaEditorDisplayComponent } from './text-area-editor-display.component';
import { TextAreaComponent } from '../../../../form-components/concrete/text-area/text-area.component';
import { FormsModule } from '@angular/forms';


describe('TextAreaEditorDisplayComponent', () => {
  let component: TextAreaEditorDisplayComponent;
  let fixture: ComponentFixture<TextAreaEditorDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAreaEditorDisplayComponent,
      TextAreaComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAreaEditorDisplayComponent);
    component = fixture.componentInstance;
    component.component = new TextAreaComponent();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

