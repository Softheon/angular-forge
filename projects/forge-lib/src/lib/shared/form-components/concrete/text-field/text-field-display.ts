import { FormDisplay } from '../../abstract/form-display';

export class TextFieldDisplay extends FormDisplay {
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
