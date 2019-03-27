import { FormValidation } from '../../abstract/form-validation';

/**
 * Text field validation attributes
 */
export class TextFieldValidation extends FormValidation {
    /**
     * Minimum length of the text field
     */
    public minimumLength: number = 2;

    /**
     * Maximum length of the text field
     */
    public maximumLength: number = 10;
}
