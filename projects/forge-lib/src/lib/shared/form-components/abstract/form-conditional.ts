/**
 * Conditional attributes for a form component
 */
export class FormConditional {
    /** The conditional type */
    public type: string;

    /** The simple conditionals */
    public simpleConditionals: SimpleConditional[];

    /** The advanced conditionals */
    public advancedConditional: string;
}

/**
 * Simple conditional attributes 
 */
export class SimpleConditional {
    /** The compare component id */
    public compareComponentId: string;

    /** The comparison type */
    public comparisonType: string;

    /** The comparison value */
    public comparisonValue: string;

    /** The action */
    public action: string;

    /** The function */
    public function: string;
}