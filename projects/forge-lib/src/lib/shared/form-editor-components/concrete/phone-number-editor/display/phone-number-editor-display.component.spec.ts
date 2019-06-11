import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumberEditorDisplayComponent } from './phone-number-editor-display.component';

describe('PhoneNumberEditorDisplayComponent', () => {
  let component: PhoneNumberEditorDisplayComponent;
  let fixture: ComponentFixture<PhoneNumberEditorDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneNumberEditorDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneNumberEditorDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
