import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingComponent } from './rating.component';

describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;

  const id = '0';
  const label = 'How well did you like this product?';
  const tooltip = 'Enter your user name here';
  const description = 'Enter how much you like this product from 1 being poor to 10 being the best product ever';
  const minRating = 1;
  const maxRating = 10;
  const minRatingDesc = 'Very Poor';
  const maxRatingDesc = 'Very Good';
  const defaultValue = 5;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RatingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
    component.id = id;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#getValue should get value', () => {
    component.value = 8;
    expect(component.getValue()).toEqual(8);
  });

  it('#selectRating should select rating', () => {
    component.selectRating(10);
    expect(component.getValue()).toEqual(10);
  });

  it('should display label', () => {
    component.display.label = label;
    fixture.detectChanges();
    const labelElement: HTMLParagraphElement = fixture.nativeElement.querySelector(`#label_${id}`);
    expect(labelElement.innerText).toEqual(label);
  });

  it('should hide label', () => {
    component.display.label = label;
    component.display.hideLabel = true;
    fixture.detectChanges();
    const labelElement: HTMLParagraphElement = fixture.nativeElement.querySelector(`#label_${id}`);
    expect(labelElement).not.toBeTruthy();
  });

  it('should display description', () => {
    component.display.description = description;
    fixture.detectChanges();
    const labelElement: HTMLParagraphElement = fixture.nativeElement.querySelector(`#description_${id}`);
    expect(labelElement.innerText).toEqual(description);
  });

  it('should display minimum rating description', () => {
    component.display.minRatingDesc = minRatingDesc;
    fixture.detectChanges();
    const labelElement: HTMLParagraphElement = fixture.nativeElement.querySelector(`#minRatingDesc_${id}`);
    expect(labelElement.innerText).toEqual(minRatingDesc);
  });

  it('should display maximum rating description', () => {
    component.display.maxRatingDesc = maxRatingDesc;
    fixture.detectChanges();
    const labelElement: HTMLParagraphElement = fixture.nativeElement.querySelector(`#maxRatingDesc_${id}`);
    expect(labelElement.innerText).toEqual(maxRatingDesc);
  });

  it('should set ratings', () => {
    component.data.minRating = minRating;
    component.data.maxRating = maxRating;
    fixture.detectChanges();
    for (let i = minRating; i <= maxRating; i++) {
      const inputElement: HTMLInputElement = fixture.nativeElement.querySelector(`#input_${id}${i}`);
      expect(inputElement).toBeTruthy();
      const labelElement: HTMLLabelElement = fixture.nativeElement.querySelector(`#label_${id}${i}`);
      expect(labelElement.innerText).toEqual(`${i}`);
    }
  });

  it('should display tooltip', () => {
    component.display.tooltip = tooltip;
    fixture.detectChanges();
    const tooltipElement: HTMLDivElement = fixture.nativeElement.querySelector(`#tooltip_${id}`);
    expect(tooltipElement).toBeTruthy();
  });

  it('should disable ratings', () => {
    component.display.disabled = true;
    fixture.detectChanges();
    for (let i = minRating; i <= maxRating; i++) {
      const inputElement: HTMLInputElement = fixture.nativeElement.querySelector(`#input_${id}${i}`);
      expect(inputElement.disabled).toEqual(true);
    }
  });

  it('should set default value', () => {
    component.data.defaultValue = 5;
    component.ngOnInit();
    expect(component.getValue()).toEqual(5);
  });
});
