import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumberEditorValidationComponent } from './phone-number-editor-validation.component';
import { FormsModule } from '@angular/forms';
import { PhoneNumberComponent } from '../../../../form-components/concrete/phone-number/phone-number.component';

describe('PhoneNumberEditorValidationComponent', () => {
  let component: PhoneNumberEditorValidationComponent;
  let fixture: ComponentFixture<PhoneNumberEditorValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneNumberEditorValidationComponent,
      PhoneNumberComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneNumberEditorValidationComponent);
    component = fixture.componentInstance;
    component.component = new PhoneNumberComponent();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
