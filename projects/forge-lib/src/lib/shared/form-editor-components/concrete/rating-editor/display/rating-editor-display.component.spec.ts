import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingEditorDisplayComponent } from './rating-editor-display.component';

describe('RatingEditorDisplayComponent', () => {
  let component: RatingEditorDisplayComponent;
  let fixture: ComponentFixture<RatingEditorDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingEditorDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingEditorDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
