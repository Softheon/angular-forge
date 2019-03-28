import { FormDisplay } from '../../abstract/form-display';

export class TextFieldDisplay extends FormDisplay {
    /**
     * The description is text that will appear below the input field.
     */
    public description: string;

    /**
     * Text that will appear before the input
     */
    public prefix: string;

    /**
     * Text that will appear after the input
     */
    public suffix: string;

    /**
     * Input Mask
     */
    public inputMask: string;
}
