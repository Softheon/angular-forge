import { FieldTemplateModel } from './fieldTemplateModel';

/**
 * Profile Template model
 */
export class ProfileTemplateModel {

  /** Gets or sets the name. */
  public name: string;

  /** Gets or sets the index. */
  public index: number;

  /** Gets or sets the fields. */
  public fields: FieldTemplateModel[];

  /**
    * Constructs a Profile Object
    * @param name The name of a profile
    * @param fields The fields of a profile
    */
  constructor(name: string, fields: FieldTemplateModel[]) {
    this.name = name;
    this.fields = fields;
  }

}
