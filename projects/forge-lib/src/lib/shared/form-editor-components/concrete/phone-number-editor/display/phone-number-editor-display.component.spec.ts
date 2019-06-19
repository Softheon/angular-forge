import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumberEditorDisplayComponent } from './phone-number-editor-display.component';
import { FormsModule } from '@angular/forms';
import { PhoneNumberComponent } from '../../../../form-components/concrete/phone-number/phone-number.component';

describe('PhoneNumberEditorDisplayComponent', () => {
  let component: PhoneNumberEditorDisplayComponent;
  let fixture: ComponentFixture<PhoneNumberEditorDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PhoneNumberEditorDisplayComponent,
        PhoneNumberComponent
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
});
