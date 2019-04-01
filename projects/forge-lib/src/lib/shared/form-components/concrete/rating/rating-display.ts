import { FormDisplay } from '../../abstract/form-display';

/**
 * Rating display attributes
 */
export class RatingDisplay extends FormDisplay {
    /**
     * The description is text that will appear below the input field.
     */
    public description: string;

    /**
     * Minimum rating description
     */
    public minRatingDesc: string;

    /**
     * Maximum rating description
     */
    public maxRatingDesc: string;
}
