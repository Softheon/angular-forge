import { FormValidation } from '../../abstract/form-validation';

/**
 * Number validation attributes
 */
export class NumberValidation extends FormValidation {
    /**
     * The minimum value allowed
     */
    public minValue: number;

    /**
     * The maximum value allowed
     */
    public maxValue: number;
}