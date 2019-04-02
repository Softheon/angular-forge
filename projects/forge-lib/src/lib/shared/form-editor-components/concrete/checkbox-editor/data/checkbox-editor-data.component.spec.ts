import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxEditorDataComponent } from './checkbox-editor-data.component';

describe('CheckboxEditorDataComponent', () => {
  let component: CheckboxEditorDataComponent;
  let fixture: ComponentFixture<CheckboxEditorDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxEditorDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxEditorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
