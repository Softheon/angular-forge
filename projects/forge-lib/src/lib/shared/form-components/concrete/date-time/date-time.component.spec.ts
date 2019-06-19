import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimeComponent } from './date-time.component';
import { FormsModule } from '@angular/forms';

describe('DateTimeComponent', () => {
  let component: DateTimeComponent;
  let fixture: ComponentFixture<DateTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateTimeComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#getValue should get value', () => {
    component.value = '02/22/1990';
    expect(component.getValue()).toEqual('02/22/1990');
  });
});
