import { FormData } from '../../abstract/form-data';

/**
 * Data attributes for number component
 */
export class NumberData extends FormData {
    /**
     * Number of decimal places allowed
     */
    public decimalPlaces: number = Number.MAX_SAFE_INTEGER;

    /**
     * Whether decimal places are required
     */
    public requireDecimal: number;

    /**
     * The minimum value allowed
     */
    public minValue: number;

    /**
     * The maximum value allowed
     */
    public maxValue: number;
}
