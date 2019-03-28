import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { NumberComponent } from './number.component';
import { NumberDirective } from '../../../directives/number.directive';
import { MinValidatorDirective } from '../../../validators/minValidator';
import { MaxValidatorDirective } from '../../../validators/maxValidator';

describe('NumberComponent', () => {
  let component: NumberComponent;
  let fixture: ComponentFixture<NumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NumberComponent,
        NumberDirective,
        MinValidatorDirective,
        MaxValidatorDirective
      ],
      imports: [
        FormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
