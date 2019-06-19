import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimeEditorDisplayComponent } from './date-time-editor-display.component';
import { FormsModule } from '@angular/forms';
import { DateTimeComponent } from '../../../../form-components/concrete/date-time/date-time.component';

describe('DateTimeEditorDisplayComponent', () => {
  let component: DateTimeEditorDisplayComponent;
  let fixture: ComponentFixture<DateTimeEditorDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DateTimeEditorDisplayComponent,
        DateTimeComponent
      ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTimeEditorDisplayComponent);
    component = fixture.componentInstance;
    component.component = new DateTimeComponent();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
