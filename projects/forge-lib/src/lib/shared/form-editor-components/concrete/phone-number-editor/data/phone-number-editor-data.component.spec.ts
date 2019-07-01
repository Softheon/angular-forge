import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumberEditorDataComponent } from './phone-number-editor-data.component';

describe('PhoneNumberEditorDataComponent', () => {
  let component: PhoneNumberEditorDataComponent;
  let fixture: ComponentFixture<PhoneNumberEditorDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneNumberEditorDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneNumberEditorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
