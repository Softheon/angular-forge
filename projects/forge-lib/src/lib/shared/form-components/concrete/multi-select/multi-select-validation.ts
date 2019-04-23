import { FormValidation } from '../../abstract/form-validation';

/**
 * The multi select validation attributes
 */
export class MultiSelectValidation extends FormValidation {

    /** The minimum number of options that need to be selected */
    public minimumChecked: number;

    /** The maximum number of options that need to be selected */
    public maximumChecked: number;
}
