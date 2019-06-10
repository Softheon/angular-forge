import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyEditorValidationComponent } from './currency-editor-validation.component';

describe('CurrencyEditorValidationComponent', () => {
  let component: CurrencyEditorValidationComponent;
  let fixture: ComponentFixture<CurrencyEditorValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyEditorValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyEditorValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
