import { Component, OnInit } from '@angular/core';
import { RatingComponent } from '../../../../form-components/concrete/rating/rating.component';
import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';

@Component({
  selector: 'forge-renderer-rating-editor-validation',
  templateUrl: './rating-editor-validation.component.html',
  styleUrls: ['./rating-editor-validation.component.css']
})
export class RatingEditorValidationComponent extends FormEditorDisplayComponent implements OnInit {

  public component: RatingComponent;

  ngOnInit() {
  }

}
