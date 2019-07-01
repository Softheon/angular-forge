import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyEditorDataComponent } from './currency-editor-data.component';
import { FormsModule } from '@angular/forms';
import { CurrencyComponent } from '../../../../form-components/concrete/currency/currency.component';
import { NumberDirective } from '../../../../directives/number.directive';

describe('CurrencyEditorDataComponent', () => {
  let component: CurrencyEditorDataComponent;
  let fixture: ComponentFixture<CurrencyEditorDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CurrencyEditorDataComponent,
        CurrencyComponent,
        NumberDirective 
      ],
      imports: [
        FormsModule,

      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyEditorDataComponent);
    component = fixture.componentInstance;
    component.component = new CurrencyComponent();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
