import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { ProcessStudioService } from './process-studio.service';

import { getEntityTemplateResMock, createEntityResMock } from '../mocks/httpMocks';
import { formRendererConfigMock } from '../mocks/configMocks';

describe('ProcessStudioService', () => {
    let processStudioService: ProcessStudioService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                ProcessStudioService
            ]
        });

        processStudioService = TestBed.get(ProcessStudioService);
        httpMock = TestBed.get(HttpTestingController);
        processStudioService.formRendererConfig = formRendererConfigMock;
    });

    it('should be created', () => {
        expect(processStudioService).toBeTruthy();
    });

    it('#getEntityTemplate should get entity templates', (done) => {
        const url = `${processStudioService.formRendererConfig.processStudioApiUrl}/v1/entityTemplate/${processStudioService.formRendererConfig.accountName}/${processStudioService.formRendererConfig.entityTemplateName}`;

        processStudioService.getEntityTemplate().then((res: any) => {
            expect(res).toEqual(getEntityTemplateResMock);
            done();
        });

        const getEntityTemplateRequest = httpMock.expectOne({ url: url, method: 'GET' });
        getEntityTemplateRequest.flush(getEntityTemplateResMock);

        httpMock.verify();
    });

    it('#createEntity should create entity', (done) => {
        const url = `${processStudioService.formRendererConfig.processStudioApiUrl}/v1/${processStudioService.formRendererConfig.accountName}/${processStudioService.formRendererConfig.entityTemplateName}`;

        processStudioService.createEntity(createEntityResMock).then((res: any) => {
            expect(res).toEqual(createEntityResMock);
            done();
        });

        const createEntityTemplateRequest = httpMock.expectOne({ url: url, method: 'POST' });
        createEntityTemplateRequest.flush(createEntityResMock);

        httpMock.verify();
    });
});
