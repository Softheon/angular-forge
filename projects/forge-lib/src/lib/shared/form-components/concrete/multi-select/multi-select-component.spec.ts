import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectComponentComponent } from './multi-select-component.component';

describe('MultiSelectComponentComponent', () => {
  let component: MultiSelectComponentComponent;
  let fixture: ComponentFixture<MultiSelectComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSelectComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
