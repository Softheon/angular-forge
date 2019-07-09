import { ComponentTypes } from "./component-types";
import { ComparisonTypes } from "./conditional-options";

export const getDataType = (name: string): string => {
    switch (name) {
        case ComponentTypes.TextField: {
            return "string";
        }
        case ComponentTypes.NumberField: {
            return "number";
        }
        case ComponentTypes.TextArea: {
            return "string";
        }
        case ComponentTypes.Checkbox: {
            return "boolean";
        }
        case ComponentTypes.Rating: {
            return "number";
        }
        case ComponentTypes.Email: {
            return "string";
        }
        case ComponentTypes.Attachment: {
            return "any";
        }
        case ComponentTypes.CheckboxGroup: {
            return "number";
        }
        case ComponentTypes.Currency: {
            return "number";
        }
        case ComponentTypes.DateTime: {
            return "date";
        }
        case ComponentTypes.PhoneNumber: {
            return "string";
        }
        default:
            return "any";
    }
};

export const getComparisonTypes = (name: string): Array<string> => {
    switch (name) {
        case ComponentTypes.TextField: {
            return [ComparisonTypes.Equal, ComparisonTypes.NotEqual, ComparisonTypes.Greater, ComparisonTypes.GreaterOrEqualTo, ComparisonTypes.Lesser, ComparisonTypes.LesserOrEqualTo, ComparisonTypes.Includes];
        }
        case ComponentTypes.NumberField: {
            return [ComparisonTypes.Equal, ComparisonTypes.NotEqual, ComparisonTypes.Greater, ComparisonTypes.GreaterOrEqualTo, ComparisonTypes.Lesser, ComparisonTypes.LesserOrEqualTo];
        }
        case ComponentTypes.TextArea: {
            return [ComparisonTypes.Equal, ComparisonTypes.NotEqual, ComparisonTypes.Greater, ComparisonTypes.GreaterOrEqualTo, ComparisonTypes.Lesser, ComparisonTypes.LesserOrEqualTo, ComparisonTypes.Includes];
        }
        case ComponentTypes.Checkbox: {
            return [ComparisonTypes.Equal, ComparisonTypes.NotEqual];
        }
        case ComponentTypes.Rating: {
            return [ComparisonTypes.Equal, ComparisonTypes.NotEqual, ComparisonTypes.Greater, ComparisonTypes.GreaterOrEqualTo, ComparisonTypes.Lesser, ComparisonTypes.LesserOrEqualTo];
        }
        case ComponentTypes.Email: {
            return [ComparisonTypes.Equal, ComparisonTypes.NotEqual, ComparisonTypes.Greater, ComparisonTypes.GreaterOrEqualTo, ComparisonTypes.Lesser, ComparisonTypes.LesserOrEqualTo, ComparisonTypes.Includes];
        }
        case ComponentTypes.Attachment: {
            return [];
        }
        case ComponentTypes.CheckboxGroup: {
            return [ComparisonTypes.Equal, ComparisonTypes.NotEqual, ComparisonTypes.Greater, ComparisonTypes.GreaterOrEqualTo, ComparisonTypes.Lesser, ComparisonTypes.LesserOrEqualTo];
        }
        case ComponentTypes.Currency: {
            return [ComparisonTypes.Equal, ComparisonTypes.NotEqual, ComparisonTypes.Greater, ComparisonTypes.GreaterOrEqualTo, ComparisonTypes.Lesser, ComparisonTypes.LesserOrEqualTo];
        }
        case ComponentTypes.DateTime: {
            return [ComparisonTypes.Equal, ComparisonTypes.NotEqual, ComparisonTypes.Greater, ComparisonTypes.GreaterOrEqualTo, ComparisonTypes.Lesser, ComparisonTypes.LesserOrEqualTo];
        }
        case ComponentTypes.PhoneNumber: {
            return [ComparisonTypes.Equal, ComparisonTypes.NotEqual, ComparisonTypes.Greater, ComparisonTypes.GreaterOrEqualTo, ComparisonTypes.Lesser, ComparisonTypes.LesserOrEqualTo, ComparisonTypes.Includes];
        }
        default:
            return [];
    }
};
