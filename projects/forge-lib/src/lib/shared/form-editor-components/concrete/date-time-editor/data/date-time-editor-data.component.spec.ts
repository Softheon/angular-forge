import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimeEditorDataComponent } from './date-time-editor-data.component';

describe('DateTimeEditorDataComponent', () => {
  let component: DateTimeEditorDataComponent;
  let fixture: ComponentFixture<DateTimeEditorDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateTimeEditorDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTimeEditorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
