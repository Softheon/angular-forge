import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, FormControl } from '@angular/forms';

import { NumberComponent } from './number.component';
import { NumberDirective } from '../../../directives/number.directive';
import { MinValidatorDirective, minValidator } from '../../../validators/minValidator';
import { MaxValidatorDirective, maxValidator } from '../../../validators/maxValidator';

describe('NumberComponent', () => {
  let component: NumberComponent;
  let fixture: ComponentFixture<NumberComponent>;

  const id = '0';
  const label = 'User Name';
  const tooltip = 'Enter your user name here';
  const prefix = '$';
  const suffix = 'ish';
  const minValue = 2;
  const maxValue = 10;
  const defaultValue = 'Default Value';

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
    component.id = id;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#getValue should get value', () => {
    component.value = 'Test Value';
    expect(component.getValue()).toEqual('Test Value');
  });

  it('should display label', () => {
    component.display.label = label;
    fixture.detectChanges();
    const labelElement: HTMLLabelElement = fixture.nativeElement.querySelector(`#label_${id}`);
    expect(labelElement.innerText).toEqual(label);
  });

  it('should hide label', () => {
    component.display.label = label;
    component.display.hideLabel = true;
    fixture.detectChanges();
    const labelElement: HTMLLabelElement = fixture.nativeElement.querySelector(`#label_${id}`);
    expect(labelElement).not.toBeTruthy();
  });

  it('should display tooltip', () => {
    component.display.tooltip = tooltip;
    fixture.detectChanges();
    const tooltipElement: HTMLDivElement = fixture.nativeElement.querySelector(`#tooltip_${id}`);
    expect(tooltipElement).toBeTruthy();
  });

  it('should disable component', () => {
    component.display.disabled = true;
    fixture.detectChanges();
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector(`#input_${id}`);
    expect(inputElement.attributes['ng-reflect-is-disabled'].value).toEqual('true');
  });

  it('should enable component', () => {
    component.display.disabled = false;
    fixture.detectChanges();
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector(`#input_${id}`);
    expect(inputElement.attributes['ng-reflect-is-disabled'].value).toEqual('false');
  });

  it('should display prefix', () => {
    component.display.prefix = prefix;
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector(`#prefix_${id}`);
    expect(button.innerHTML).toEqual(prefix);
  });

  it('should display suffix', () => {
    component.display.suffix = suffix;
    fixture.detectChanges();
    const button: HTMLButtonElement = fixture.nativeElement.querySelector(`#suffix_${id}`);
    expect(button.innerHTML).toEqual(suffix);
  });

  it('should validate required', () => {
    component.validation.required = true;
    fixture.detectChanges();
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector(`#input_${id}`);
    expect(inputElement.attributes['required']).toBeTruthy();
  });

  it('should validate optional', () => {
    component.validation.required = false;
    fixture.detectChanges();
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector(`#input_${id}`);
    expect(inputElement.attributes['required']).not.toBeTruthy();
  });

  it('should set minimum value', () => {
    component.validation.minValue = minValue;
    fixture.detectChanges();
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector(`#input_${id}`);
    expect(+inputElement.attributes['ng-reflect-min-value'].value).toEqual(minValue);
  });

  it('should set maximum value', () => {
    component.validation.maxValue = maxValue;
    fixture.detectChanges();
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector(`#input_${id}`);
    expect(+inputElement.attributes['ng-reflect-max-value'].value).toEqual(maxValue);
  });

  it('should set default value', () => {
    component.data.defaultValue = defaultValue;
    component.ngOnInit();
    expect(component.getValue()).toEqual(defaultValue);
  });

  it('should validate min value as invalid', () => {
    let ctrlValue = String(minValue - 1);
    expect(minValidator(minValue)(new FormControl(ctrlValue))).toEqual({
      'minValue': { value: ctrlValue }
    });
  });

  it('should validate min value as valid', () => {
    let ctrlValue = String(minValue + 1);
    expect(minValidator(minValue)(new FormControl(ctrlValue))).toBeNull();
  });

  it('should validate max value as invalid', () => {
    let ctrlValue = String(maxValue + 1);
    expect(maxValidator(maxValue)(new FormControl(ctrlValue))).toEqual({
      'maxValue': { value: ctrlValue }
    });
  });

  it('should validate max value as valid', () => {
    let ctrlValue = String(maxValue - 1);
    expect(maxValidator(maxValue)(new FormControl(ctrlValue))).toBeNull();
  });
});
