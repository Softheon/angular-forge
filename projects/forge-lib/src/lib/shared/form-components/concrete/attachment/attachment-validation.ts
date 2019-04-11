import { FormValidation } from '../../abstract/form-validation';

/**
 * Attach validation attributes
 */
export class AttachmentValidation extends FormValidation {
    /**
     * The maximum file size allowed
     */
    public maximumFileSize: number = 10 * 1024 * 1024;

    /**
     * The maximum number of attachments that can be queued
     */
    public maximumQueueSize: number = 5;

    /**
     * The allowed mime types
     */
    public allowedFileExtensions: string[];
}
