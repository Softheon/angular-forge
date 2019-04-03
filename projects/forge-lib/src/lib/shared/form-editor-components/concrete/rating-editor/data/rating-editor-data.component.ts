import { Component, OnInit } from '@angular/core';
import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';
import { RatingComponent } from '../../../../form-components/concrete/rating/rating.component';

@Component({
  selector: 'forge-renderer-rating-editor-data',
  templateUrl: './rating-editor-data.component.html',
  styleUrls: ['./rating-editor-data.component.css']
})
export class RatingEditorDataComponent extends FormEditorDisplayComponent implements OnInit {

  public component: RatingComponent;

  ngOnInit() {
  }

}
