import { FieldType } from './field-type';

/**
 * Field Template model
 */
export class FieldTemplateModel {

  /** Gets or sets the name. */
  public name: string;

  /** Gets or sets the type. */
  public type: string;

   /**
    * Constructs a Field Object
    * @param name The name of a field
    * @param type The type of a field
    */
  constructor(name: string, type: FieldType) {
    this.name = name;
    this.type = type;
  }
}