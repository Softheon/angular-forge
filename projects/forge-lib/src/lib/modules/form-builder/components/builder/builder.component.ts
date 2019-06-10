import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

import { FormComponent } from '../../../../shared/form-components/abstract/form-component';
import { TextFieldComponent } from '../../../../shared/form-components/concrete/text-field/text-field.component';
import { NumberComponent } from '../../../../shared/form-components/concrete/number/number.component';
import { FormsService } from '../../../../core/services/forms.service';
import { TextAreaComponent } from '../../../../shared//form-components/concrete/text-area/text-area.component';
import { CheckboxComponent } from '../../../../shared/form-components/concrete/checkbox/checkbox.component';
import { RatingComponent } from '../../../../shared/form-components/concrete/rating/rating.component';
import { EmailComponent } from '../../../../shared/form-components/concrete/email/email.component';
import { AttachmentComponent } from '../../../../shared/form-components/concrete/attachment/attachment.component';
import { FormBuilderConfig } from '../../../../../lib/configs/form-builder-lib-config';
import { MultiSelectComponent } from '../../../../shared/form-components/concrete/multi-select/multi-select-component';
import { Form } from '../../../../shared/models/form';
import { ComponentTypes } from '../../../../shared/constants/component-types';
import { CurrencyComponent } from '../../../../shared/form-components/concrete/currency/currency.component';

@Component({
  selector: 'forge-form-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {


  @Input() formBuilderConfig: FormBuilderConfig;

  /**
   * The Index
   */
  public index: number = 0;

  /**
   * List of components
   */
  public components: Array<string> = [
    ComponentTypes.TextField,
    ComponentTypes.NumberField,
    ComponentTypes.TextArea,
    ComponentTypes.Checkbox,
    ComponentTypes.Rating,
    ComponentTypes.Email,
    ComponentTypes.Attachment,
    ComponentTypes.CheckboxGroup,
    ComponentTypes.Currency
  ];

  /**
   * List of existing forms
   */
  public existingForms: Array<Form>;

  /**
   * The list of forge components that have been created
   */
  public forgeComponents: Array<FormComponent> = [];

  /**
   * The selected form component
   */
  public selectedComponent: FormComponent;

  /**
   * Constructs the component
   * @param formsService Forms service
   */
  constructor(
    public formsService: FormsService
  ) { }

  /**
   * Initializes the component
   */
  public async ngOnInit(): Promise<void> {
    this.formsService.formBuilderConfig = this.formBuilderConfig;
    this.formsService.getEntityTemplates().then((res) => {
      this.formsService.entities = res
    });
    if(this.formBuilderConfig.formName)
    {
      this.editForm(this.formBuilderConfig.formName);
    }
  }

  /**
   * Select a form to edit
   * @param formName the name of the form to edit
   */
  public async editForm(formName: string): Promise<void> {
    this.formsService.form = await this.formsService.getForm(formName)
  }

  /**
   * Create a new form
   */
  public createNewForm(): void {
    this.formsService.form.name = 'New Form';
  }

  /**
   * Actions to take when an object has been dragged into the components box
   */
  public drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer.id === 'components' && event.previousContainer === event.container) {
      return; // Prevent dragging within the components container
    } else if (event.previousContainer.id === 'forgeComponents' && event.previousContainer === event.container) {
      // TODO
    } else if (event.previousContainer.id === 'components' && event.previousContainer !== event.container) {
      this.generateComponent(event.previousContainer.data[event.previousIndex]);
    }
  }

  /**
   * Generates and adds the component to the list
   * @param type Component type
   */
  public generateComponent(type: string) {
    // Switch statement for which component to build
    switch (type) {
      case ComponentTypes.TextField: {
        this.addComponent(new TextFieldComponent(), `${ComponentTypes.TextField}_${this.index++}`);
        break;
      } case ComponentTypes.NumberField: {
        this.addComponent(new NumberComponent(), `${ComponentTypes.NumberField}_${this.index++}`);
        break;
      } case ComponentTypes.TextArea: {
        this.addComponent(new TextAreaComponent(), `${ComponentTypes.TextArea}_${this.index++}`);
        break;
      } case ComponentTypes.Checkbox: {
        this.addComponent(new CheckboxComponent(), `${ComponentTypes.Checkbox}_${this.index++}`);
        break;
      } case ComponentTypes.Rating: {
        this.addComponent(new RatingComponent(), `${ComponentTypes.Rating}_${this.index++}`);
        break;
      } case ComponentTypes.Email: {
        this.addComponent(new EmailComponent(), `${ComponentTypes.Email}_${this.index++}`);
        break;
      } case ComponentTypes.Attachment: {
        this.addComponent(new AttachmentComponent(), `${ComponentTypes.Attachment}_${this.index++}`);
        break;
      } case ComponentTypes.CheckboxGroup: {
        this.addComponent(new MultiSelectComponent(), `${ComponentTypes.CheckboxGroup}_${this.index++}`);
        break;
      } case ComponentTypes.Currency: {
        this.addComponent(new CurrencyComponent(), `${ComponentTypes.Currency}_${this.index++}`);
        break;
      }
    }
  }

  /**
   * The no return predicate
   */
  public noReturnPredicate(): boolean {
    return false;
  }

  /**
   * Add a component to the list of components
   * @param component the component to add
   * @param id the id of the component
   */
  public addComponent(component: any, id: string): void {
    component.id = id;
    this.formsService.form.components.push(component);
  }

  /**
   * Delete a component from the components on the page and from the service
   */
  public deleteComponent(): void {
    for(let i = 0; i<this.formsService.form.components.length; i++)
    {
      if(this.formsService.form.components[i].id == this.selectedComponent.id)
      {
        this.forgeComponents.splice(i, 1);
        this.formsService.form.components.splice(i, 1);
        this.selectedComponent = null;
        break;
      }
    }
  }

  /**
   * Open the components builder modal back up
   * @param index the index of he component
   */
  public editComponent(index: number): void {
    this.selectedComponent = this.formsService.form.components[index];
  }

  /**
   * Creates the form in the repository
   */
  public createForm(): void {
    this.formsService.postCreateForm();
  }

  /**
 * tracker for re-rendering *ngFor
 * @param index index of the item
 * @param item the component;
 */
  public trackComponentById(index, item): any {
    return item.id;
  }
}
