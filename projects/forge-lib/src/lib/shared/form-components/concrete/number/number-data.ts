import { FormData } from '../../abstract/form-data';

/**
 * Data attributes for number component
 */
export class NumberData extends FormData {
    /**
     * Number of decimal places allowed
     */
    public decimalPlaces: number;

    /**
     * Whether decimal places are required
     */
    public requireDecimal: number;

    /**
     * The range of numbers allowed
     */
    public numberRange: string;
}
