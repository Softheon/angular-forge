import { FormData } from '../../abstract/form-data';

/**
 * Data attributes for number component
 */
export class NumberData extends FormData {
    /**
     * Number of decimal places allowed
     */
    public decimalPlaces: number = -1;

    /**
     * Whether decimal places are required
     */
    public requireDecimal: boolean;
}
