/**
 * Conditional type constants
 */
export class ConditionalTypes {
    /** Simple conditional type */
    public static readonly Simple: string = 'simple';

    /** Advanced conditional type */
    public static readonly Advanced: string = 'advanced';
}

/**
 * Comparison type constants
 */
export class ComparisonTypes {
    /** Equal comparison type */
    public static readonly Equal: string = '===';

    /** Not equal comparison type */
    public static readonly NotEqual: string = '!==';

    /** Greater comparison type */
    public static readonly Greater: string = '>';

    /** Greater or equal to comparison type */
    public static readonly GreaterOrEqualTo: string = '>=';

    /** Lesser comparison type */
    public static readonly Lesser: string = '<';

    /** Lesser or equal to comparison type */
    public static readonly LesserOrEqualTo: string = '<=';

    /** Includes comparison type */
    public static readonly Includes: string = '.includes';
}

/**
 * Action type constants
 */
export class ActionTypes {
    /** Hide action type */
    public static readonly Hide: string = 'hide';

    /** Display action type*/
    public static readonly Display: string = 'display';

    /** Hide:notrequired action type */
    public static readonly HideNotRequired: string = 'hide:notrequired';

    /** Display:required action type*/
    public static readonly DisplayRequired: string = 'display:required';

    /** Disable action type */
    public static readonly Disable: string = 'disable';

    /** Enable action type */
    public static readonly Enable: string = 'enable';
}