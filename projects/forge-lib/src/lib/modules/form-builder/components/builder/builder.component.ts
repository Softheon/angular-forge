import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogRef } from '@angular/material';

import { FormComponent } from '../../../../shared/form-components/abstract/form-component';
import { TextFieldComponent } from '../../../../shared/form-components/concrete/text-field/text-field.component';
import { NumberComponent } from '../../../../shared/form-components/concrete/number/number.component';
import { FieldEditorComponent } from '../../../../modules/form-builder/components/field-editor/field-editor.component';
import { FormsService } from '../../../../core/services/forms.service';
import { TextAreaComponent } from '../../../../shared//form-components/concrete/text-area/text-area.component';
import { CheckboxComponent } from '../../../../shared/form-components/concrete/checkbox/checkbox.component';
import { RatingComponent } from '../../../../shared/form-components/concrete/rating/rating.component';
import { EmailComponent } from '../../../../shared/form-components/concrete/email/email.component';
import { AttachmentComponent } from '../../../../shared/form-components/concrete/attachment/attachment.component';
import { FormBuilderConfig } from '../../../../../lib/configs/form-builder-lib-config';
import { MultiSelectComponent } from '../../../../shared/form-components/concrete/multi-select/multi-select-component';
import { Form } from 'projects/forge-lib/src/lib/shared/models/form';

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
    'Text Field',
    'Number Field',
    'Text Area',
    'Checkbox',
    'Rating',
    'Email',
    'Attachment',
    'Checkbox Group'
  ];

  /**
   * Array of what index in the component list is being hovered over
   */
  public hovered: Boolean[] = [];

  /**
   * The material dialog reference
   */
  public dialogRef: MatDialogRef<any>;

  /**
   * List of existing forms
   */
  public existingForms: Array<Form>;

  /**
   * The list of forge components that have been created
   */
  public forgeComponents: Array<FormComponent> = [];

  /**
   * Constructs the component
   * @param dialog Dialog
   * @param formsService Forms service
   */
  constructor(private dialog: MatDialog,
    public formsService: FormsService) { }

  /**
   * Initializes the component
   */
  public async ngOnInit(): Promise<void> {
    this.formsService.formBuilderConfig = this.formBuilderConfig;
    this.formsService.getEntityTemplates().then((res) => {
      this.formsService.entities = res
    });

    this.formsService.form.name = null;
    this.existingForms = await this.formsService.getForms();
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
      this.hovered.push(false);
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
      case 'Text Field': {
        this.addComponent(new TextFieldComponent(), `text_field_${this.index++}`);
        break;
      } case 'Number Field': {
        this.addComponent(new NumberComponent(), `number_${this.index++}`);
        break;
      } case 'Text Area': {
        this.addComponent(new TextAreaComponent(), `text_area_${this.index++}`);
        break;
      } case 'Checkbox': {
        this.addComponent(new CheckboxComponent(), `checkbox_${this.index++}`);
        break;
      } case 'Rating': {
        this.addComponent(new RatingComponent(), `rating_${this.index++}`);
        break;
      } case 'Email': {
        this.addComponent(new EmailComponent(), `email_${this.index++}`);
        break;
      } case 'Attachment': {
        this.addComponent(new AttachmentComponent(), `attachment_${this.index++}`);
        break;
      } case 'Checkbox Group': {
        this.addComponent(new MultiSelectComponent(), `multiselect_${this.index++}`);
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
  public deleteComponent(index: number): void {
    this.forgeComponents.splice(index, 1);
    this.formsService.form.components.splice(index, 1);
  }

  /**
   * Open the components builder modal back up
   * @param index the index of he component
   */
  public editComponent(index: number): void {
    this.dialogRef = this.dialog.open(FieldEditorComponent, {
      data: {
        field: this.formsService.form.components[index],
        isEdit: true
      },
      width: '80vw'
    });
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
