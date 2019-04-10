import { Injectable } from '@angular/core';
import { FormComponent } from '../../shared/form-components/abstract/form-component';
import { Form } from '../../shared/models/form';
import { EntityTemplateModel } from '../../shared/models/entityTemplateModel';
import { FormBuilderConfig } from '../../configs/form-builder-lib-config';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FormsService {

  /**
   * The form
   */
  public form: Form = new Form();

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
 * Gets the entity template
 */
public async postCreateForm(): Promise<Array<EntityTemplateModel>> {
  const url = `${this.formBuilderConfig.forgeApiUrl}/v1/form/${this.formBuilderConfig.accountName}`;
  const headers = this.getHeader(this.formBuilderConfig.oauthToken);
  let body = this.createFormJson();

  return this.http.post<Array<EntityTemplateModel>>(url, body, { headers: headers })
    .toPromise()
    .then(value => {
      console.log(value);
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
}
