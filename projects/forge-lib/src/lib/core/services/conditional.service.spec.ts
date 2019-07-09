import { TestBed } from '@angular/core/testing';
import { ConditionalService } from './conditional.service';
import { formComponentsMock } from '../mocks/httpMocks';
import { FormComponent } from '../../shared/form-components/abstract/form-component';
import { TextFieldComponent } from '../../shared/form-components/concrete/text-field/text-field.component';
import { SimpleConditional } from '../../shared/form-components/abstract/form-conditional';

describe('ConditionalService', () => {
  let conditionalService: ConditionalService;
  let components: any[];
  let component: FormComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ConditionalService
      ]
    });

    conditionalService = TestBed.get(ConditionalService);
    components = formComponentsMock;
    component = new TextFieldComponent();
  });

  it('should be created', () => {
    expect(conditionalService).toBeTruthy();
  });

  it('should generate value-based conditional with string data type', () => {
    let conditional: SimpleConditional = { compareComponentId: 'Text Field_0', comparisonType: '.includes', comparisonValue: 'Softheon', comparisonComponentId: null, action: 'disable', function: null };
    component.conditional.simpleConditionals = [conditional];
    component.conditional.type = 'simple';
    conditionalService.generateConditionals(component, components);
    expect(conditional.function).toContain(conditional.comparisonType);
    expect(conditional.function).toContain(conditional.comparisonValue);
  });

  it('should generate component-based conditional with string data type', () => {
    let conditional: SimpleConditional = { compareComponentId: 'Text Field_0', comparisonType: '===', comparisonValue: null, comparisonComponentId: 'Text Field_0', action: 'hide', function: null };
    component.conditional.simpleConditionals = [conditional];
    component.conditional.type = 'simple';
    conditionalService.generateConditionals(component, components);
    expect(conditional.function).toContain(conditional.comparisonType);
  });

  it('should generate value-based conditional with number data type', () => {
    let conditional: SimpleConditional = { compareComponentId: 'Number Field_1', comparisonType: '>', comparisonValue: '12', comparisonComponentId: null, action: 'disable', function: null };
    component.conditional.simpleConditionals = [conditional];
    component.conditional.type = 'simple';
    conditionalService.generateConditionals(component, components);
    expect(conditional.function).toContain(conditional.comparisonType);
    expect(conditional.function).toContain(conditional.comparisonValue);
  });

  it('should generate component-based conditional with number data type', () => {
    let conditional: SimpleConditional = { compareComponentId: 'Number Field_1', comparisonType: '===', comparisonValue: null, comparisonComponentId: 'Number Field_1', action: 'hide', function: null };
    component.conditional.simpleConditionals = [conditional];
    component.conditional.type = 'simple';
    conditionalService.generateConditionals(component, components);
    expect(conditional.function).toContain(conditional.comparisonType);
  });

  it('should generate value-based conditional with boolean data type', () => {
    let conditional: SimpleConditional = { compareComponentId: 'Checkbox_2', comparisonType: '===', comparisonValue: 'true', comparisonComponentId: null, action: 'disable', function: null };
    component.conditional.simpleConditionals = [conditional];
    component.conditional.type = 'simple';
    conditionalService.generateConditionals(component, components);
    expect(conditional.function).toContain(conditional.comparisonType);
    expect(conditional.function).toContain(conditional.comparisonValue);
  });

  it('should generate component-based conditional with boolean data type', () => {
    let conditional: SimpleConditional = { compareComponentId: 'Checkbox_2', comparisonType: '===', comparisonValue: null, comparisonComponentId: 'Checkbox_2', action: 'hide', function: null };
    component.conditional.simpleConditionals = [conditional];
    component.conditional.type = 'simple';
    conditionalService.generateConditionals(component, components);
    expect(conditional.function).toContain(conditional.comparisonType);
  });

  it('should apply value-based conditional with string data type', () => {
    let conditional: SimpleConditional = { compareComponentId: 'Text Field_0', comparisonType: '>', comparisonValue: 'Softheon', comparisonComponentId: null, action: 'disable', function: null };
    component.conditional.simpleConditionals = [conditional];
    component.conditional.type = 'simple';
    conditionalService.generateConditionals(component, components);
    components.push(component);

    let updatedComponent: FormComponent = components.filter(comp => comp.id == 'Text Field_0')[0];
    updatedComponent.getValue = function () { return 'Softie' };
    conditionalService.applyConditionals(updatedComponent, components);

    expect(component.display.disabled).toBe(true);
  });

  it('should apply component-based conditional with string data type', () => {
    let conditional: SimpleConditional = { compareComponentId: 'Text Field_0', comparisonType: '===', comparisonValue: null, comparisonComponentId: 'Text Field_0', action: 'enable', function: null };
    component.conditional.simpleConditionals = [conditional];
    component.conditional.type = 'simple';
    conditionalService.generateConditionals(component, components);
    components.push(component);

    let updatedComponent: FormComponent = components.filter(comp => comp.id == 'Text Field_0')[0];
    updatedComponent.getValue = function () { return 'Softheon' };
    conditionalService.applyConditionals(updatedComponent, components);

    expect(component.display.disabled).toBe(false);
  });

  it('should apply value-based conditional with number data type', () => {
    let conditional: SimpleConditional = { compareComponentId: 'Number Field_1', comparisonType: '>', comparisonValue: '12', comparisonComponentId: null, action: 'display:required', function: null };
    component.conditional.simpleConditionals = [conditional];
    component.conditional.type = 'simple';
    conditionalService.generateConditionals(component, components);
    components.push(component);

    let updatedComponent: FormComponent = components.filter(comp => comp.id == 'Number Field_1')[0];
    updatedComponent.getValue = function () { return 24 };
    conditionalService.applyConditionals(updatedComponent, components);

    expect(component.display.hidden).toBe(false);
    expect(component.validation.required).toBe(true);
  });

  it('should apply component-based conditional with number data type', () => {
    let conditional: SimpleConditional = { compareComponentId: 'Number Field_1', comparisonType: '===', comparisonValue: null, comparisonComponentId: 'Number Field_1', action: 'hide:notrequired', function: null };
    component.conditional.simpleConditionals = [conditional];
    component.conditional.type = 'simple';
    conditionalService.generateConditionals(component, components);
    components.push(component);

    let updatedComponent: FormComponent = components.filter(comp => comp.id == 'Number Field_1')[0];
    updatedComponent.getValue = function () { return 24 };
    conditionalService.applyConditionals(updatedComponent, components);

    expect(component.display.hidden).toBe(true);
    expect(component.validation.required).toBe(false);
  });

  it('should apply value-based conditional with boolean data type', () => {
    let conditional: SimpleConditional = { compareComponentId: 'Checkbox_2', comparisonType: '===', comparisonValue: 'true', comparisonComponentId: null, action: 'hide', function: null };
    component.conditional.simpleConditionals = [conditional];
    component.conditional.type = 'simple';
    conditionalService.generateConditionals(component, components);
    components.push(component);

    let updatedComponent: FormComponent = components.filter(comp => comp.id == 'Checkbox_2')[0];
    updatedComponent.getValue = function () { return true };
    conditionalService.applyConditionals(updatedComponent, components);

    expect(component.display.hidden).toBe(true);
  });

  it('should apply component-based conditional with boolean data type', () => {
    let conditional: SimpleConditional = { compareComponentId: 'Checkbox_2', comparisonType: '===', comparisonValue: null, comparisonComponentId: 'Checkbox_2', action: 'display', function: null };
    component.conditional.simpleConditionals = [conditional];
    component.conditional.type = 'simple';
    conditionalService.generateConditionals(component, components);
    components.push(component);

    let updatedComponent: FormComponent = components.filter(comp => comp.id == 'Checkbox_2')[0];
    updatedComponent.getValue = function () { return true };
    conditionalService.applyConditionals(updatedComponent, components);

    expect(component.display.hidden).toBe(false);
  });

  it('should not apply conditional with missing function attribute in conditional', () => {
    let hidden: any = component.display.hidden;
    let conditional: SimpleConditional = { compareComponentId: 'Text Field_0', comparisonType: '===', comparisonValue: null, comparisonComponentId: 'Text Field_0', action: 'hide', function: null };
    component.conditional.simpleConditionals = [conditional];
    component.conditional.type = 'simple';
    components.push(component);

    let updatedComponent: FormComponent = components.filter(comp => comp.id == 'Text Field_0')[0];
    updatedComponent.getValue = function () { return 'Softheon' };
    conditionalService.applyConditionals(updatedComponent, components);

    expect(component.display.hidden).toBe(hidden);
  });
});
