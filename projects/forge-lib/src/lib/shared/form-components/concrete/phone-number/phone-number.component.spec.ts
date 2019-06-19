import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumberComponent } from './phone-number.component';
import { FormsModule } from '@angular/forms';

describe('PhoneNumberComponent', () => {
  let component: PhoneNumberComponent;
  let fixture: ComponentFixture<PhoneNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneNumberComponent ],
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
