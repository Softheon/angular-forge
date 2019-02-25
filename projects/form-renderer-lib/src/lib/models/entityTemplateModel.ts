import { ProfileTemplateModel } from './profileTemplateModel';

/**
 * Entity template model
 */
export class EntityTemplateModel {

  /** Gets or sets the type. */
  public type: number;

  /** Gets or sets the name. */
  public name: string;

  /** Gets or sets the category. */
  public category: string;

  /** Gets or sets the profiles. */
  public profiles: ProfileTemplateModel[];

  /** Gets or sets the creation time. */
  public creationTime: Date;

  /** Gets or sets the modification time. */
  public modificationTime: Date;

  /** Gets or sets the small image. */
  public smallImage: string;

  /** Gets or sets the large image. */
  public largeImage: string;

  /** Gets or sets a value indicating whether this instance has audit. */
  public hasAudit: boolean;

  /** Gets or sets a value indicating whether [allow view images]. */
  public allowViewImages: boolean;

  /** Gets or sets a value indicating whether this instance is review state. */
  public isReviewState: boolean;

   /**
    * Constructs a Template Object
    * @param name The name of a template
    * @param type The id of a template
    * @param category The categories of a template
    * @param profiles The profiles of a template
    */
  constructor(name: string, type: number, category: string, profiles: ProfileTemplateModel[]) {
    this.name = name;
    this.type = type;
    this.category = category;
    this.profiles = profiles;
    this.largeImage = 'images/large.gif',
    this.smallImage = 'images/small.gif',
    this.hasAudit = this.allowViewImages = this.isReviewState = false;
  }
}
