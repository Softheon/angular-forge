import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingEditorDisplayComponent } from './rating-editor-display.component';
import { RatingComponent } from '../../../../form-components/concrete/rating/rating.component';
import { FormsModule } from '@angular/forms';


describe('RatingEditorDisplayComponent', () => {
  let component: RatingEditorDisplayComponent;
  let fixture: ComponentFixture<RatingEditorDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingEditorDisplayComponent,
      RatingComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingEditorDisplayComponent);
    component = fixture.componentInstance;
    component.component = new RatingComponent;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
