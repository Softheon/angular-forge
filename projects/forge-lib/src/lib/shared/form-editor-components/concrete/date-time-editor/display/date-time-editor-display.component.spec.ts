import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimeEditorDisplayComponent } from './date-time-editor-display.component';

describe('DateTimeEditorDisplayComponent', () => {
  let component: DateTimeEditorDisplayComponent;
  let fixture: ComponentFixture<DateTimeEditorDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateTimeEditorDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTimeEditorDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
