import { Injectable } from '@angular/core';
import { FormComponent } from '../../shared/form-components/abstract/form-component';
import { Form } from '../../shared/models/form';


@Injectable({
  providedIn: 'root'
})
export class FormsService {

  /**
   * The form
   */
  public form: Form = new Form();

  constructor() { 
    this.form.components = new Array<FormComponent>();
    this.form.name = "";
  }

  /**
   * Gets the component location in the array by its id
   */
  public getComponentLocByID(id: String): number {
    for (let i = 0; i < this.form.components.length; i++) {
      if (this.form.components[i].id === id) {
        return i;
      }
    }
    return -1;
  }

  /**
   * Create the form json string
   */
  public createFormJson(): string {
    let formJson = {
      "name": this.form.name,
      "components": this.form.components
    }

    return JSON.stringify(formJson);
  }
}
