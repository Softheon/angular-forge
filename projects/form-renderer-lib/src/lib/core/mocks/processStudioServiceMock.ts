import { getEntityTemplateResMock, createEntityResMock } from './httpMocks';
import { EntityTemplateModel } from '../../shared/models/entityTemplateModel';

export const processStudioServiceMock = {
    async getEntityTemplate(): Promise<EntityTemplateModel> {
        return Promise.resolve(getEntityTemplateResMock);
    },
    async createEntity(_request: any): Promise<any> {
        return Promise.resolve(createEntityResMock);
    }
};
