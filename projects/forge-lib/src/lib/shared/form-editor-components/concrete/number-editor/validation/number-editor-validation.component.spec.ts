import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberEditorValidationComponent } from './number-editor-validation.component';

describe('NumberEditorValidationComponent', () => {
  let component: NumberEditorValidationComponent;
  let fixture: ComponentFixture<NumberEditorValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberEditorValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberEditorValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
