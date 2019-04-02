import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxEditorDisplayComponent } from './checkbox-editor-display.component';

describe('CheckboxEditorDisplayComponent', () => {
  let component: CheckboxEditorDisplayComponent;
  let fixture: ComponentFixture<CheckboxEditorDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxEditorDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxEditorDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
