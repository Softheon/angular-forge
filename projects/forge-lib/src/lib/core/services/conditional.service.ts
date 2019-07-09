import { Injectable } from '@angular/core';
import { FormComponent } from '../../shared/form-components/abstract/form-component';
import { ConditionalTypes, ActionTypes } from '../../shared/constants/conditional-options';
import { SimpleConditional } from '../../shared/form-components/abstract/form-conditional';
import { getDataType } from '../../shared/constants/conditional-registry';

@Injectable({
  providedIn: 'root'
})
export class ConditionalService {

  /**
   * Constructs the service
   */
  constructor() { }

  /**
   * Generate functions as string from conditional attributes
   * @param component the selected form component
   * @param components the components in a form
   */
  public generateConditionals(component: FormComponent, components: FormComponent[]): void {
    for (var i = 0; i < component.conditional.simpleConditionals.length; i++) {
      let conditional = component.conditional.simpleConditionals[i];
      if (!conditional.action || !conditional.compareComponentId || !conditional.comparisonType || (!conditional.comparisonValue && !conditional.comparisonComponentId)) continue;
      let comparitor = conditional.comparisonType;
      let expected = conditional.comparisonValue;
      let dataType = getDataType(components.filter(comp => comp.id == conditional.compareComponentId)[0].type);
      let conditionalType = this.checkConditionalType(conditional);

      if (conditionalType == 'comparisonValue') {
        this.constructComparisonValueConditional(conditional, comparitor, expected, dataType);
      } else {
        this.constructComparisonComponentConditional(conditional, comparitor, dataType);
      }
    }
  }

  /**
   * Constructs the conditional function to be evaluated as strings when the comparison value is a string
   * @param conditional the conditional to be evaluated
   * @param comparitor the conditional comparitor
   * @param expected the expected value
   * @param dataType the data type of the comparison value
   */
  public constructComparisonValueConditional(conditional: SimpleConditional, comparitor: string, expected: string, dataType: string): void {
    switch (dataType) {
      case 'boolean':
        conditional.function = `(compareComponentValue) => { return compareComponentValue${comparitor}(String(${expected}).toLowerCase() == 'true'? true : false); }`;
        break;
      case 'date':
        conditional.function = `(compareComponentValue) => { return compareComponentValue${comparitor}new Date("${expected}"); }`;
        if (comparitor == '===' || comparitor == '!==') {
          conditional.function = `(compareComponentValue) => { return compareComponentValue.getTime()${comparitor}(new Date("${expected}")).getTime(); }`;
        }
        break;
      case 'number':
        conditional.function = `(compareComponentValue) => { return Number(compareComponentValue)${comparitor}Number(${expected}); }`;
        break;
      case 'string':
        conditional.function = `(compareComponentValue) => { return compareComponentValue${comparitor}String("${expected}"); }`;
        if (comparitor == ".includes") {
          conditional.function = `(compareComponentValue) => { return compareComponentValue${comparitor}(String("${expected}")); }`;
        }
        break;
      default:
        conditional.function = `(compareComponentValue) => { return compareComponentValue${comparitor}${expected}; }`;
    }
  }

  /**
 * Constructs the conditional function to be evaluated as strings when the comparison value is another component
 * @param conditional the conditional to be evaluated
 * @param comparitor the conditional comparitor
 * @param dataType the data type of the comparison value
 */
  public constructComparisonComponentConditional(conditional: SimpleConditional, comparitor: string, dataType: string): void {
    switch (dataType) {
      case 'boolean':
        conditional.function = `(compareComponentValue, comparisonComponentValue) => { return compareComponentValue${comparitor}comparisonComponentValue; }`;
        break;
      case 'date':
        conditional.function = `(compareComponentValue, comparisonComponentValue) => { return compareComponentValue${comparitor}comparisonComponentValue; }`;
        if (comparitor == '===' || comparitor == '!==') {
          conditional.function = `(compareComponentValue, comparisonComponentValue) => { return compareComponentValue.getTime()${comparitor}comparisonComponentValue.getTime(); }`;
        }
        break;
      case 'number':
        conditional.function = `(compareComponentValue, comparisonComponentValue) => { return Number(compareComponentValue)${comparitor}Number(comparisonComponentValue); }`;
        break;
      case 'string':
        conditional.function = `(compareComponentValue, comparisonComponentValue) => { return compareComponentValue${comparitor}comparisonComponentValue; }`;
        if (comparitor == ".includes") {
          conditional.function = `(compareComponentValue, comparisonComponentValue) => { return compareComponentValue${comparitor}(comparisonComponentValue); }`;
        }
        break;
      default:
        conditional.function = `(compareComponentValue, comparisonComponentValue) => { return compareComponentValue${comparitor}comparisonComponentValue; }`;
    }
  }

  /**
   * Apply conditionals
   * @param updatedComponent the updated form component
   * @param components the components in a form
   */
  public applyConditionals(updatedComponent: FormComponent, components: FormComponent[]): void {
    for (var i = 0; i < components.length; i++) {
      let component = components[i];
      if (component.conditional.type == ConditionalTypes.Advanced) {
        if (component.conditional.advancedConditional) {
        }
      } else {
        if (component.conditional.simpleConditionals) {
          for (var j = 0; j < component.conditional.simpleConditionals.length; j++) {
            let conditional = component.conditional.simpleConditionals[j];
            let conditionalType = this.checkConditionalType(conditional);
            if (conditionalType == 'comparisonValue') {
              if (conditional.compareComponentId == updatedComponent.id) {
                this.log(conditional, updatedComponent);
                this.evaluateConditional(conditional, component, updatedComponent);
              }
            } else {
              if (conditional.compareComponentId == updatedComponent.id || conditional.comparisonComponentId == updatedComponent.id) {
                let otherComponent: FormComponent;
                if (conditional.compareComponentId == updatedComponent.id) {
                  otherComponent = components.filter(comp => comp.id == conditional.comparisonComponentId)[0];
                  this.log(conditional, updatedComponent, otherComponent);
                  this.evaluateConditional(conditional, component, updatedComponent, otherComponent);
                } else {
                  otherComponent = components.filter(comp => comp.id == conditional.compareComponentId)[0];
                  this.log(conditional, otherComponent, updatedComponent);
                  this.evaluateConditional(conditional, component, otherComponent, updatedComponent);
                }
              }
            }
          }
        }
      }
    }
  }

  /**
   * Evaluate conditional 
   * @param conditional the conditional to be evaluated
   * @param component the component whose conditional is evaluated
   * @param compareComponent the first component to be compared
   * @param comparisonComponent the second component to be compared
   */
  public evaluateConditional(conditional: SimpleConditional, component: FormComponent, compareComponent: FormComponent, comparisonComponent?: FormComponent): void {
    if (!conditional.function) return;

    let action: boolean;
    if (!comparisonComponent) {
      action = eval(conditional.function)(compareComponent.getValue());
    } else {
      if (compareComponent.getValue() != null && comparisonComponent.getValue() != null) {
        action = eval(conditional.function)(compareComponent.getValue(), comparisonComponent.getValue());
      }
    }

    switch (conditional.action) {
      case ActionTypes.Hide: {
        component.display.hidden = action ? true : false;
        break;
      }
      case ActionTypes.Display: {
        component.display.hidden = action ? false : true;
        break;
      }
      case ActionTypes.Disable: {
        component.display.disabled = action ? true : false;
        break;
      }
      case ActionTypes.Enable: {
        component.display.disabled = action ? false : true;
        break;
      }
      case ActionTypes.HideNotRequired: {
        component.display.hidden = action ? true : false;
        component.validation.required = action ? false : true;
        break;
      }
      case ActionTypes.DisplayRequired: {
        component.display.hidden = action ? false : true;
        component.validation.required = action ? true : false;
        break;
      }
    }
  }

  /**
   * Checks whether comparison is done with a value or another component
   * @param conditional the conditional to be evaluated
   */
  private checkConditionalType(conditional: SimpleConditional): string {
    if (!conditional.comparisonValue || conditional.comparisonValue == '') {
      return "comparisonComponent";
    }

    return "comparisonValue";
  }

  /**
   * Logs conditional evaluation
   * @param conditional the conditional to be evaluated
   * @param updatedComponent the updated form component
   */
  private log(conditional: SimpleConditional, compareComponent: FormComponent, comparisonComponent?: FormComponent): void {
    if(!conditional.function) return;
    console.log(conditional.function);
    if (!comparisonComponent) {
      console.log(eval(conditional.function)(compareComponent.getValue()));
    } else {
      if (compareComponent.getValue() != null && comparisonComponent.getValue() != null) {
        console.log(eval(conditional.function)(compareComponent.getValue(), comparisonComponent.getValue()));
      }
    }
  }
}
