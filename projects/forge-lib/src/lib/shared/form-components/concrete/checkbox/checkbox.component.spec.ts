import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CheckboxComponent } from './checkbox.component';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  const id = '0';
  const label = 'User Name';
  const tooltip = 'Enter your user name here';
  const defaultValue = true;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CheckboxComponent
      ],
      imports: [
        FormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    component.id = id;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#getValue should get value', () => {
    component.value = true;
    expect(component.getValue()).toEqual(true);
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
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector(`#checkbox_${id}`);
    expect(inputElement.attributes['ng-reflect-is-disabled'].value).toEqual('true');
  });

  it('should enable component', () => {
    component.display.disabled = false;
    fixture.detectChanges();
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector(`#checkbox_${id}`);
    expect(inputElement.attributes['ng-reflect-is-disabled'].value).toEqual('false');
  });

  it('should set default value', () => {
    component.data.defaultValue = defaultValue;
    component.ngOnInit();
    expect(component.getValue()).toEqual(defaultValue);
  });
});
