import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreaEditorComponent } from './text-area-editor.component';

describe('TextAreaEditorComponent', () => {
  let component: TextAreaEditorComponent;
  let fixture: ComponentFixture<TextAreaEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAreaEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAreaEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
