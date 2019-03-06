import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { ForgeService } from './forge.service';

import { getEntityTemplateResMock, createEntityResMock } from '../mocks/httpMocks';
import { formRendererConfigMock } from '../mocks/configMocks';

describe('ForgeService', () => {
    let forgeService: ForgeService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                ForgeService
            ]
        });

        forgeService = TestBed.get(ForgeService);
        httpMock = TestBed.get(HttpTestingController);
        forgeService.formRendererConfig = formRendererConfigMock;
    });

    it('should be created', () => {
        expect(forgeService).toBeTruthy();
    });

    it('#getEntityTemplate should get entity templates', (done) => {
        const url = `${forgeService.formRendererConfig.forgeApiUrl}/v1/entityTemplate/${forgeService.formRendererConfig.accountName}/${forgeService.formRendererConfig.formName}`;

        forgeService.getEntityTemplate().then((res: any) => {
            expect(res).toEqual(getEntityTemplateResMock);
            done();
        });

        const getEntityTemplateRequest = httpMock.expectOne({ url: url, method: 'GET' });
        getEntityTemplateRequest.flush(getEntityTemplateResMock);

        httpMock.verify();
    });

    it('#createEntity should create entity', (done) => {
        const url = `${forgeService.formRendererConfig.forgeApiUrl}/v1/${forgeService.formRendererConfig.accountName}/${forgeService.formRendererConfig.formName}`;

        forgeService.createEntity(createEntityResMock).then((res: any) => {
            expect(res).toEqual(createEntityResMock);
            done();
        });

        const createEntityTemplateRequest = httpMock.expectOne({ url: url, method: 'POST' });
        createEntityTemplateRequest.flush(createEntityResMock);

        httpMock.verify();
    });
});
