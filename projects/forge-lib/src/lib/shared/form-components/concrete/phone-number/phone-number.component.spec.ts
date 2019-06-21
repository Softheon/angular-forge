import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumberComponent } from './phone-number.component';
import { FormsModule } from '@angular/forms';
import { PhoneNumberDirective } from '../../../directives/phone-number.directive';

describe('PhoneNumberComponent', () => {
  let component: PhoneNumberComponent;
  let fixture: ComponentFixture<PhoneNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
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
    fixture = TestBed.createComponent(PhoneNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
