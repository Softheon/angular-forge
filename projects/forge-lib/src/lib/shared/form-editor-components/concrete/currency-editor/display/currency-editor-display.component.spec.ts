import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyEditorDisplayComponent } from './currency-editor-display.component';

describe('CurrencyEditorDisplayComponent', () => {
  let component: CurrencyEditorDisplayComponent;
  let fixture: ComponentFixture<CurrencyEditorDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyEditorDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyEditorDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
