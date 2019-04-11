import { FormDisplay } from '../../abstract/form-display';

/**
 * Attachment display attributes
 */
export class AttachmentDisplay extends FormDisplay {
    /**
     * The attachment label
     */
    public label: string = 'Drop your files here.';

    /**
     * The attachment description
     */
    public description: string = 'or you can upload a file directly from your computer';
}
