import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreaEditorDataComponent } from './text-area-editor-data.component';

describe('TextAreaEditorDataComponent', () => {
  let component: TextAreaEditorDataComponent;
  let fixture: ComponentFixture<TextAreaEditorDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextAreaEditorDataComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAreaEditorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
