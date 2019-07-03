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
     */
  public generateConditionals(component: FormComponent, components: FormComponent[]): void {
    for (var i = 0; i < component.conditional.simpleConditionals.length; i++) {
      let conditional = component.conditional.simpleConditionals[i];
      if (!conditional.action || !conditional.compareComponentId || !conditional.comparisonType || !conditional.comparisonValue) continue;
      let comparitor = conditional.comparisonType;
      let expected = conditional.comparisonValue;
      let type = getDataType(components.filter(comp => comp.id == conditional.compareComponentId)[0].type);

      switch (type) {
        case 'boolean':
          conditional.function = `(compareComponentValue) => { return compareComponentValue${comparitor}(String(${expected}).toLowerCase() == 'true'? true : false); }`;
          break;
        case 'date':
          conditional.function = `(compareComponentValue) => { return compareComponentValue${comparitor}new Date("${expected}"); }`;
          if (comparitor == '===' || comparitor == '!==') {
            conditional.function = `(compareComponentValue) => { return compareComponentValue.getTime()${comparitor}new Date("${expected}").getTime()}; }`;
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
            if (conditional.compareComponentId == updatedComponent.id) {
              this.log(conditional, updatedComponent);
              this.evaluateSimpleConditional(conditional, updatedComponent, component);
            }
          }
        }
      }
    }
  }

  /**
   * Evaluate conditional
   * @param conditional the conditional to be evaluated
   * @param updatedComponent the updated form component
   * @param component the component whose conditional is evaluated
   */
  public evaluateSimpleConditional(conditional: SimpleConditional, updatedComponent: FormComponent, component: FormComponent): void {
    if (!conditional.function) return;
    if (eval(conditional.function)(updatedComponent.getValue())) {
      switch (conditional.action) {
        case ActionTypes.Hide: {
          component.display.hidden = true;
          break;
        }
        case ActionTypes.Display: {
          component.display.hidden = false;
          break;
        }
        case ActionTypes.Disable: {
          component.display.disabled = true;
          break;
        }
        case ActionTypes.Enable: {
          component.display.disabled = false;
          break;
        }
        case ActionTypes.HideNotRequired: {
          component.display.hidden = true;
          component.validation.required = false;
          break;
        }
        case ActionTypes.DisplayRequired: {
          component.display.hidden = false;
          component.validation.required = true;
          break;
        }
      }
    } else {
      switch (conditional.action) {
        case ActionTypes.Hide: {
          component.display.hidden = false;
          break;
        }
        case ActionTypes.Display: {
          component.display.hidden = true;
          break;
        }
        case ActionTypes.Disable: {
          component.display.disabled = false;
          break;
        }
        case ActionTypes.Enable: {
          component.display.disabled = true;
          break;
        }
        case ActionTypes.HideNotRequired: {
          component.display.hidden = false;
          component.validation.required = true;
          break;
        }
        case ActionTypes.DisplayRequired: {
          component.display.hidden = true;
          component.validation.required = false;
          break;
        }
      }
    }
  }

  /**
   * Logs conditional evaluation
   * @param conditional the conditional to be evaluated
   * @param updatedComponent the updated form component
   */
  private log(conditional: SimpleConditional, updatedComponent: FormComponent): void {
    console.log(conditional.function);
    console.log(eval(conditional.function)(updatedComponent.getValue()));
  }
}
