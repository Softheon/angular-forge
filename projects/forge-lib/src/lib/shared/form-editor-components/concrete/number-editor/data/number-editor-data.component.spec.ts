import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberEditorDataComponent } from './number-editor-data.component';

import { NumberComponent } from '../../../../form-components/concrete/number/number.component';
import { FormsModule } from '@angular/forms';
import { NumberDirective } from '../../../../directives/number.directive';
import { MinValidatorDirective } from '../../../../validators/minValidator';
import { MaxValidatorDirective } from '../../../../validators/maxValidator';

describe('NumberEditorDataComponent', () => {
  let component: NumberEditorDataComponent;
  let fixture: ComponentFixture<NumberEditorDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NumberEditorDataComponent,
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
    fixture = TestBed.createComponent(NumberEditorDataComponent);
    component = fixture.componentInstance;
    component.component = new NumberComponent();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
