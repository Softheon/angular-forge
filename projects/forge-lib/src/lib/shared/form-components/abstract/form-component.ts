import { FormDisplay } from './form-display';
import { ComponentActions } from './component-actions';
import { FormValidation } from './form-validation';
import { FormData } from './form-data';
import { FormApi } from './form-api';
import { FormConditional } from './form-conditional';

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
    abstract display: FormDisplay;

    /**
     * Form validation attributes
     */
    abstract validation: FormValidation;

    /**
     * Form data attributes
     */
    abstract data: FormData;

    /**
     * Form api attribute
     */
    abstract api: FormApi = new FormApi();

    /**
     * Form conditional attribute
     */
    abstract conditional: FormConditional = new FormConditional();

    /**
     * Gets the value of the form component
     */
    abstract getValue(): any;
}
