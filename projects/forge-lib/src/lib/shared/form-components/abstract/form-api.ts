import { Option } from '../../models/option';

/**
 * Data attributes for a form component
 */
export class FormApi {

    /** The account name */
    public accountName: string;

    /** The entity template name */
    public entityTemplateName: string;

    /** The profile name */
    public profileName: string;

    /** The field name */
    public fieldName: string;

    /** The options */
    public options: Option[];
}
