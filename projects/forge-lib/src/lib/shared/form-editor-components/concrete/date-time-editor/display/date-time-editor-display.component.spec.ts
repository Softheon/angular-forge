import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimeEditorDisplayComponent } from './date-time-editor-display.component';
import { FormsModule } from '@angular/forms';
import { DateTimeComponent } from '../../../../form-components/concrete/date-time/date-time.component';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';

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
        FormsModule,
        AngularMyDatePickerModule
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

  it('should update date format', () => {
    component.component.display.dateFormat = 'mm.dd.yyyy';
    component.emitDateFormat();
    expect(component.component.myDpOptions.dateFormat).toEqual('mm.dd.yyyy');
  });

  it('should not update date format', () => {
    component.component.display.dateFormat = 'mm/yyyy';
    component.emitDateFormat();
    expect(component.component.myDpOptions.dateFormat).not.toEqual('mm/yyyy');
  });
});
