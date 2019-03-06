import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { EntityTemplateModel } from '../../shared/models/entityTemplateModel';
import { FormRendererConfig } from '../../config/form-renderer-lib-config';

@Injectable({
    providedIn: 'root'
})
export class ForgeService {
    public formRendererConfig: FormRendererConfig;

    /**
     * Constructs the service
     * @param http HTTP Client
     */
    constructor(private http: HttpClient) { }

    /**
     * Gets the entity template
     */
    public async getEntityTemplate(): Promise<EntityTemplateModel> {
        const url = `${this.formRendererConfig.forgeApiUrl}/v1/entityTemplate/${this.formRendererConfig.accountName}/${this.formRendererConfig.formName}`;
        const headers = this.getHeader(this.formRendererConfig.oauthToken);

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
    public async createEntity(request: any): Promise<any> {
        const url = `${this.formRendererConfig.forgeApiUrl}/v1/${this.formRendererConfig.accountName}/${this.formRendererConfig.formName}`;
        const headers = this.getHeader(this.formRendererConfig.oauthToken);

        return this.http.post<any>(url, request, { headers: headers })
            .toPromise()
            .then(value => {
                return value;
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
