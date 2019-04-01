import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxEditorComponent } from './checkbox-editor.component';

describe('CheckboxEditorComponent', () => {
  let component: CheckboxEditorComponent;
  let fixture: ComponentFixture<CheckboxEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
