import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectComponent } from './multi-select-component';

describe('MultiSelectComponent', () => {
  let component: MultiSelectComponent;
  let fixture: ComponentFixture<MultiSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectComponent);
    component = fixture.componentInstance;
    component.id = '0';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#getValue should get value', () => {
    component.value = 8;
    expect(component.getValue()).toEqual(8);
  });

  it('#calculateValue should add to value', () => {
    const event = {
      target: {
        checked: true
      }
    };
    component.value = 2;
    component.calculateValue(event, 8);
    expect(component.value).toEqual(10);
  });

  it('#calculateValue should subtract from value', () => {
    const event = {
      target: {
        checked: false
      }
    };
    component.value = 10;
    component.calculateValue(event, 8);
    expect(component.value).toEqual(2);
  });

  it('should set label', () => {
    component.display.label = 'Label Text';
    fixture.detectChanges();
    const labelElement: HTMLLabelElement = fixture.nativeElement.querySelector(`#label_${component.id}`);
    expect(labelElement.innerText).toEqual('Label Text');
  });

  it('should hide label', () => {
    component.display.label = 'Label Text';
    component.display.hideLabel = true;
    fixture.detectChanges();
    const labelElement: HTMLLabelElement = fixture.nativeElement.querySelector(`#label_${component.id}`);
    expect(labelElement).toBeNull();
  });

  it('should show tooltip', () => {
    component.display.tooltip = 'Tooltip Text';
    fixture.detectChanges();
    const divElement: HTMLDivElement = fixture.nativeElement.querySelector(`#tooltip_${component.id}`);
    expect(divElement).toBeTruthy();
  });

  it('should show description', () => {
    component.display.description = 'Description Text';
    fixture.detectChanges();
    const descElement: HTMLParagraphElement = fixture.nativeElement.querySelector(`#description_${component.id}`);
    expect(descElement.innerText).toEqual(component.display.description);
  });
});
