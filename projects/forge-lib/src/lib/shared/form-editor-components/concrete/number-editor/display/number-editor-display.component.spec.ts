import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberEditorDisplayComponent } from './number-editor-display.component';

describe('NumberEditorDisplayComponent', () => {
  let component: NumberEditorDisplayComponent;
  let fixture: ComponentFixture<NumberEditorDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberEditorDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberEditorDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
