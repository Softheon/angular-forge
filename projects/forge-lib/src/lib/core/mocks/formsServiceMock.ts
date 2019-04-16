import { EntityTemplateModel } from "../../shared/models/entityTemplateModel";
import { Form } from "../../shared/models/form";
import { getEntityTemplateResMock, createEntityResMock } from "./httpMocks";

export const formsServiceMock = {
    async getEntityTemplates(): Promise<Array<EntityTemplateModel>> {
        return Promise.resolve(new Array<EntityTemplateModel>());
    },
    async getForm(): Promise<Form> {
        return new Form();
    },
    async getEntityTemplate(): Promise<EntityTemplateModel>{
        return Promise.resolve(getEntityTemplateResMock);
    },
    async createEntity(): Promise<any>{
        return Promise.resolve(createEntityResMock)
    }
};
