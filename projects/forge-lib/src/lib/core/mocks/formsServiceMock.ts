import { EntityTemplateModel } from "../../shared/models/entityTemplateModel";

export const formsServiceMock = {
    async getEntityTemplates(): Promise<Array<EntityTemplateModel>> {
        return Promise.resolve(new Array<EntityTemplateModel>());
    }
};
