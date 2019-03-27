import { Display } from './form-display';
import { ComponentActions } from './component-actions';
import { FormValidation } from './form-validation';

/**
 * Abstract Form Component
 */
export abstract class FormComponent implements ComponentActions {
    /**
     * Form component identifier
     */
    abstract id: string;

    /**
     * Form component type
     */
    abstract type: string;

    /**
     * Display attributes
     */
    abstract display: Display;

    /**
     * Form validation attributes
     */
    abstract validation: FormValidation;

    /**
     * Form data attributes
     */
    abstract data: FormData;

    /**
     * Gets the value of the form component
     */
    abstract getValue(): any;
}
