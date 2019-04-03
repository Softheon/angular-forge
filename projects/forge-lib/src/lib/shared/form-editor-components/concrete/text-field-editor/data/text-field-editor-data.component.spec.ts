import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFieldEditorDataComponent } from './text-field-editor-data.component';

describe('TextFieldEditorDataComponent', () => {
  let component: TextFieldEditorDataComponent;
  let fixture: ComponentFixture<TextFieldEditorDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextFieldEditorDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFieldEditorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
