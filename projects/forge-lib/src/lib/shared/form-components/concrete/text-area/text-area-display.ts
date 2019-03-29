import { TextFieldDisplay } from '../../../../shared/form-components/concrete/text-field/text-field-display';

/**
 * Text area attributes
 */
export class TextAreaDisplay extends TextFieldDisplay {
    /**
     * Number of rows allowed in the text area
     */
    public rows: number;

    /**
     * Number of columns allowed in the text area
     */
    public cols: number;
}
