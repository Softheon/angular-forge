import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyEditorDataComponent } from './currency-editor-data.component';

describe('CurrencyEditorDataComponent', () => {
  let component: CurrencyEditorDataComponent;
  let fixture: ComponentFixture<CurrencyEditorDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyEditorDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyEditorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
