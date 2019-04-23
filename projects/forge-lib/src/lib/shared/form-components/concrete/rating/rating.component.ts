import { Component, OnInit } from '@angular/core';

import { FormComponent } from '../../abstract/form-component';
import { RatingDisplay } from './rating-display';
import { RatingValidation } from './rating-validation';
import { RatingData } from './rating-data';
import { FormApi } from '../../abstract/form-api';
import { ComponentTypes } from '../../../constants/component-types';

/**
 * Rating component
 */
@Component({
  selector: 'forge-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent extends FormComponent implements OnInit {
  /**
   * The ID of the component
   */
  public id: string;

  /**
   * The type of the component
   */
  public type: string = ComponentTypes.Rating;

  /**
   * The display attributes
   */
  public display: RatingDisplay = new RatingDisplay();

  /**
   * The validation attributes
   */
  public validation: RatingValidation = new RatingValidation();

  /**
   * The data attributes
   */
  public data: RatingData = new RatingData();

  /**
   * The selected rating value
   */
  public value: number;

  /**
 * Api data attributes
 */
  public api: FormApi = new FormApi();

  /**
   * List of ratings
   */
  public ratings: number[] = new Array<number>();

  /**
   * Initializes the component
   */
  ngOnInit() {
    this.value = this.data.defaultValue;

    for (let i = this.data.minRating; i <= this.data.maxRating; i++) {
      this.ratings.push(i);
    }

    if (!this.display.label) {
      this.display.label = 'Rating';
    }
  }

  /**
   * Gets the value of the component
   */
  public getValue() {
    return this.value;
  }

  /**
   * Updates the selected rating
   * @param rating The selected rating
   */
  public selectRating(rating: number): void {
    this.value = rating;
  }
}
