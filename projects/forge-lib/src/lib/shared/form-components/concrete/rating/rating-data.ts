import { FormData } from '../../abstract/form-data';

/**
 * Rating data attributes
 */
export class RatingData extends FormData {
    /**
     * Minimum rating
     */
    public minRating: number = 1;

    /**
     * Maximum rating
     */
    public maxRating: number = 10;
}
