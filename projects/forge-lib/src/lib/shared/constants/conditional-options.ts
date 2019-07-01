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
    public static readonly Equal: string = '==';

    /** Greater comparison type */
    public static readonly Greater: string = '>';

    /** Greater or equal to comparison type */
    public static readonly GreaterOrEqualTo: string = '>=';

    /** Lesser comparison type */
    public static readonly Lesser: string = '<';

    /** Lesser or equal to comparison type */
    public static readonly LesserOrEqualTo: string = '<=';
}

/**
 * Action type constants
 */
export class ActionTypes {
    /** Hide comparison type */
    public static readonly Hide: string = 'hide';

    /** Display comparison type*/
    public static readonly Display: string = 'display';

    /** Disable comparison type */
    public static readonly Disable: string = 'disable';
}