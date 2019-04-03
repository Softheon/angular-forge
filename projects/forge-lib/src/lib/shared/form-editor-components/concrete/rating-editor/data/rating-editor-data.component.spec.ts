import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingEditorDataComponent } from './rating-editor-data.component';
import { RatingComponent } from '../../../../form-components/concrete/rating/rating.component';
import { FormsModule } from '@angular/forms';

describe('RatingEditorDataComponent', () => {
  let component: RatingEditorDataComponent;
  let fixture: ComponentFixture<RatingEditorDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        RatingEditorDataComponent,
        RatingComponent
       ],
       imports: [
         FormsModule
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingEditorDataComponent);
    component = fixture.componentInstance;
    component.component = new RatingComponent();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
