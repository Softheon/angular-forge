/**
 * Validation attributes for a form component
 */
export abstract class FormValidation {
    /**
     * Whether the form component is required.
     */
    public required: boolean;

    /**
     * Custom error message for all errors on a form component
     */
    public customErrorMessage: string;
}
