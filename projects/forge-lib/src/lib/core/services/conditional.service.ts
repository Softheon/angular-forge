import { Injectable } from '@angular/core';
import { FormComponent } from '../../shared/form-components/abstract/form-component';
import { ConditionalTypes } from '../../shared/constants/conditional-options';

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
  public generateConditionals(component: FormComponent): void {
    for (var i = 0; i < component.conditional.simpleConditionals.length; i++) {
      // TODO: right now only handles numbers, should handle strings and datetimes
      let conditional = component.conditional.simpleConditionals[i];
      let comparitor = conditional.comparisonType;
      let expected = conditional.comparisonValue;
      conditional.function = `(compareComponentValue) => { return compareComponentValue ${comparitor} ${expected}; }`;
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
          //TODO: advanced conditional
        }
      } else {
        if (component.conditional.simpleConditionals) {
          for (var j = 0; j < component.conditional.simpleConditionals.length; j++) {
            let conditional = component.conditional.simpleConditionals[j];
            if (conditional.compareComponentId == updatedComponent.id) {
              console.log(conditional.function);
              console.log(eval(conditional.function)(updatedComponent.getValue()));
              if (eval(conditional.function)(updatedComponent.getValue())) {
                //TODO: take action, switch case with conditional.action
                console.log(`${component.id} should be ${conditional.action}`);
              }
            }
          }
        }
      }
    }
  }
}
