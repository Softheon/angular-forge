import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectEditorValidationComponent } from './multi-select-editor-validation.component';

describe('MultiSelectEditorValidationComponent', () => {
  let component: MultiSelectEditorValidationComponent;
  let fixture: ComponentFixture<MultiSelectEditorValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSelectEditorValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectEditorValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
