import { Injectable } from '@angular/core';
import { FormComponent } from '../../shared/form-components/abstract/form-component';
import { Form } from '../../shared/models/form';
import { EntityTemplateModel } from '../../shared/models/entityTemplateModel';
import { FormBuilderConfig } from '../../configs/form-builder-lib-config';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { TextFieldComponent } from '../../shared/form-components/concrete/text-field/text-field.component';
import { AttachmentComponent } from '../../shared/form-components/concrete/attachment/attachment.component';
import { CheckboxComponent } from '../../shared/form-components/concrete/checkbox/checkbox.component';
import { EmailComponent } from '../../shared/form-components/concrete/email/email.component';
import { NumberComponent } from '../../shared/form-components/concrete/number/number.component';
import { RatingComponent } from '../../shared/form-components/concrete/rating/rating.component';
import { TextAreaComponent } from '../../shared/form-components/concrete/text-area/text-area.component';


@Injectable({
  providedIn: 'root'
})
export class FormsService {

  /**
   * The form
   */
  public form: Form = new Form();

  /**
   * List of entities
   */
  public entities: Array<EntityTemplateModel> = [];

  /**
   * Form builder configuration
   */
  public formBuilderConfig: FormBuilderConfig;

  constructor(private http: HttpClient) {
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
      "comment": "created by form builder",
      "description": "",
      "layout": { "components": this.form.components }
    }

    return JSON.stringify(formJson);
  }

  /**
 * Gets the entity template
 */
  public async getEntityTemplates(): Promise<Array<EntityTemplateModel>> {
    const url = `${this.formBuilderConfig.forgeApiUrl}/v1/entityTemplate/${this.formBuilderConfig.accountName}`;
    const headers = this.getHeader(this.formBuilderConfig.oauthToken);

    return this.http.get<Array<EntityTemplateModel>>(url, { headers: headers })
      .toPromise()
      .then(value => {
        return value as Array<EntityTemplateModel>;
      }).catch(error => {
        return Promise.reject(error);
      });
  }

  /**
  * Gets the entity template
  */
  public async getEntityTemplate(templateName: string): Promise<EntityTemplateModel> {
    const url = `${this.formBuilderConfig.forgeApiUrl}/v1/entityTemplate/${this.formBuilderConfig.accountName}/${templateName}`;
    const headers = this.getHeader(this.formBuilderConfig.oauthToken);

    return this.http.get<EntityTemplateModel>(url, { headers: headers })
      .toPromise()
      .then(value => {
        return value as EntityTemplateModel;
      }).catch(error => {
        return Promise.reject(error);
      });
  }

  /**
 * Creates the entity
 * @param request Payload
 */
  public async createEntity(name: string, request: any): Promise<any> {
    const url = `${this.formBuilderConfig.forgeApiUrl}/v1/${this.formBuilderConfig.accountName}/${name}`;
    const headers = this.getHeader(this.formBuilderConfig.oauthToken);

    return this.http.post<any>(url, request, { headers: headers })
      .toPromise()
      .then(value => {
        return value;
      }).catch(error => {
        return Promise.reject(error);
      });
  }

  public async getForm(formName: string): Promise<Form> {
    const url = `${this.formBuilderConfig.forgeApiUrl}/v1/form/${this.formBuilderConfig.accountName}/${formName}`;
    const headers = this.getHeader(this.formBuilderConfig.oauthToken);

    return this.http.get<EntityTemplateModel>(url, { headers: headers })
      .toPromise()
      .then(value => {
        this.mapFormResponse(value);
        console.log(this.form);
        return this.form;
      }).catch(error => {
        return Promise.reject(error);
      });
  }

  /**
* Gets the entity template
*/
  public async postCreateForm(): Promise<Array<EntityTemplateModel>> {
    const url = `${this.formBuilderConfig.forgeApiUrl}/v1/form/${this.formBuilderConfig.accountName}`;
    const headers = this.getHeader(this.formBuilderConfig.oauthToken);
    let body = this.createFormJson();

    return this.http.post<Array<EntityTemplateModel>>(url, body, { headers: headers })
      .toPromise()
      .then(value => {
        return value as Array<EntityTemplateModel>;
      }).catch(error => {
        return Promise.reject(error);
      });
  }

  /**
 * Gets the HTTP Header
 * @param oauthToken OAuth Token
 */
  private getHeader(oauthToken: string): HttpHeaders {
    return new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${oauthToken}` });
  }

  /**
   * maps the response from the api to a form.
   * @param res the response from the form api
   */
  private mapFormResponse(res: any): void {
    this.form.name = res.name;
    if (res && res.layout) {
      res.layout.components.forEach((component) => {
        switch (component.type) {
          case "Attachment": {
            this.form.components.push(Object.assign(new AttachmentComponent(), component));
            break;
          }
          case "Checkbox": {
            this.form.components.push(Object.assign(new CheckboxComponent(), component));
            break;
          }
          case "Email": {
            this.form.components.push(Object.assign(new EmailComponent(), component));
            break;
          }
          case "Number": {
            this.form.components.push(Object.assign(new NumberComponent(), component));
            break;
          }
          case "Rating": {
            this.form.components.push(Object.assign(new RatingComponent(), component));
            break;
          }
          case "Text Area": {
            this.form.components.push(Object.assign(new TextAreaComponent(), component));
            break;
          }
          case "Text Field": {
            this.form.components.push(Object.assign(new TextFieldComponent(), component));
            break;
          }
        }
      });
    }
  }
}
