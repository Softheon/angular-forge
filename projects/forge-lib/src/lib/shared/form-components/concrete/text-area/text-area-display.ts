import { FormDisplay } from '../../abstract/form-display';

/**
 * Text area attributes
 */
export class TextAreaDisplay extends FormDisplay {
    /**
     * Number of rows allowed in the text area
     */
    public rows: number;

    /**
     * Number of columns allowed in the text area
     */
    public cols: number;

    /**
     * The description is text that will appear below the input field.
     */
    public description: string;
}
