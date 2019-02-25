import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Navigation, Router } from '@angular/router';

import { ResultsComponent } from './results.component';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;
  let routerStub: {
    getCurrentNavigation();
  };

  beforeEach(async(() => {
    routerStub = {
      getCurrentNavigation() {
        return {
          extras: {
            state: 'test'
          }
        };
      }
    };

    TestBed.configureTestingModule({
      declarations: [ResultsComponent],
      providers: [
        { provide: Router, useValue: routerStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set title', () => {
    const h4: HTMLElement = fixture.nativeElement.querySelector('h4');
    expect(h4.textContent).toEqual('Form Successfully Submitted');
  });
});
