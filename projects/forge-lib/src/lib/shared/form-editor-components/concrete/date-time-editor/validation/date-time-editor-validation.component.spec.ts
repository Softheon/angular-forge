import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimeEditorValidationComponent } from './date-time-editor-validation.component';
import { FormsModule } from '@angular/forms';

describe('DateTimeEditorValidationComponent', () => {
  let component: DateTimeEditorValidationComponent;
  let fixture: ComponentFixture<DateTimeEditorValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateTimeEditorValidationComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTimeEditorValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
