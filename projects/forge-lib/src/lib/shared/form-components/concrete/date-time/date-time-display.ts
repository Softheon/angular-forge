import { FormDisplay } from '../../abstract/form-display';

export class DateTimeDisplay extends FormDisplay {
    /**
     * Placeholder of date
     */
    public placeholder: string;

    /**
     * Description of date
     */
    public description: string;

    /**
     * Format of date
     */
    public dateFormat: string;
}
