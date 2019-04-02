import { Component, OnInit } from '@angular/core';
import { RatingComponent } from '../../../../form-components/concrete/rating/rating.component';

import { FormEditorDisplayComponent } from '../../../abstract/form-editor/display/form-editor-display-component';

@Component({
  selector: 'forge-renderer-rating-editor-display',
  templateUrl: './rating-editor-display.component.html',
  styleUrls: ['./rating-editor-display.component.css']
})
export class RatingEditorDisplayComponent extends FormEditorDisplayComponent  implements OnInit {

  public component: RatingComponent

  ngOnInit() {
  }

}
