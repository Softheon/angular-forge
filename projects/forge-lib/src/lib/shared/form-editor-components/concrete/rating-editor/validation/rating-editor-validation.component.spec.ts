import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingEditorValidationComponent } from './rating-editor-validation.component';

describe('RatingEditorValidationComponent', () => {
  let component: RatingEditorValidationComponent;
  let fixture: ComponentFixture<RatingEditorValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingEditorValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingEditorValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
