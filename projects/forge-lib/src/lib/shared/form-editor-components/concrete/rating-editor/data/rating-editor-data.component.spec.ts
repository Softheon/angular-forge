import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingEditorDataComponent } from './rating-editor-data.component';

describe('RatingEditorDataComponent', () => {
  let component: RatingEditorDataComponent;
  let fixture: ComponentFixture<RatingEditorDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingEditorDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingEditorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
