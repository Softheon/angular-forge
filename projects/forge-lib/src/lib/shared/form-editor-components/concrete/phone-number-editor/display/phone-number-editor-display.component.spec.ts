import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumberEditorDisplayComponent } from './phone-number-editor-display.component';
import { FormsModule } from '@angular/forms';
import { PhoneNumberComponent } from '../../../../form-components/concrete/phone-number/phone-number.component';
import { PhoneNumberDirective } from '../../../../directives/phone-number.directive';

describe('PhoneNumberEditorDisplayComponent', () => {
  let component: PhoneNumberEditorDisplayComponent;
  let fixture: ComponentFixture<PhoneNumberEditorDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PhoneNumberEditorDisplayComponent,
        PhoneNumberComponent,
        PhoneNumberDirective
      ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneNumberEditorDisplayComponent);
    component = fixture.componentInstance;
    component.component = new PhoneNumberComponent();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset value only for invalid mask', () => {
    component.component.display.inputMask = '(xyz) - xyz - wxyz'
    component.resetValue();
    expect(component.component.value).toEqual('');
    expect(component.component.validation.minimumLength).toBeNull();
    expect(component.component.validation.maximumLength).toBeNull();
  });

  it('should reset value and apply validation for valid mask', () => {
    component.component.display.inputMask = '(xxx) - xxx - xxxx'
    component.resetValue();
    expect(component.component.value).toEqual('');
    expect(component.component.validation.minimumLength).toEqual(10);
    expect(component.component.validation.maximumLength).toEqual(10);
  });
});
