import { FieldType } from './field-type';
import { Option } from './option';

/**
 * Field Template model
 */
export class FieldTemplateModel {

  /** Gets or sets the name. */
  public name: string;

  /** Gets or sets the type. */
  public type: string;

  /** The options */
  public options?: Option[];

  /** The fields */
  public fields: FieldTemplateModel[];

  /** the Field Template Model */
  public data: FieldTemplateModel[][] = [];

   /**
    * Constructs a Field Object
    * @param name The name of a field
    * @param type The type of a field
    * @param fields: the list of fields
    */
  constructor(name?: string, type?: FieldType, fields?: FieldTemplateModel[]) {
    this.name = name;
    this.type = type;
    this.fields = fields;
  }
}
