import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

import { FormRendererLibComponent } from './form-renderer-lib.component';

import { ForgeService } from '../../../../core/services/forge.service';

import { forgeServiceMock } from '../../../../core/mocks/forgeServiceMock';
import { getEntityTemplateResMock } from '../../../../core/mocks/httpMocks';
import { ProfileTemplateModel } from '../../../../shared/models/profileTemplateModel';
import { FieldTemplateModel } from '../../../../shared/models/fieldTemplateModel';
import { formRendererConfigMock } from 'projects/forge-lib/src/lib/core/mocks/configMocks';

describe('FormRendererLibComponent', () => {
  let component: FormRendererLibComponent;
  let fixture: ComponentFixture<FormRendererLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormRendererLibComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: ForgeService, useValue: forgeServiceMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRendererLibComponent);
    component = fixture.componentInstance;
    component.formRendererConfig = JSON.parse(JSON.stringify(formRendererConfigMock));
    component.entityTemplateModel = JSON.parse(JSON.stringify(getEntityTemplateResMock));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set title', async () => {
    await component.renderForm();
    fixture.detectChanges();
    const h3: HTMLElement = fixture.nativeElement.querySelector('h3');
    expect(h3.textContent).toEqual(getEntityTemplateResMock.name);
  });

  it('should set entity name label', async () => {
    await component.renderForm();
    fixture.detectChanges();

    const htmlCollection: HTMLCollection = fixture.nativeElement.getElementsByTagName('LABEL');

    const labels = (<HTMLLabelElement[]>Array.from(htmlCollection)).filter((lbl) => {
      return lbl.htmlFor === 'entityName';
    });

    expect(labels.length === 1);
    expect(labels[0].textContent).toEqual('Airplane Name');
  });

  it('should render form', async () => {
    await component.renderForm();
    fixture.detectChanges();

    for (let i = 0; i < getEntityTemplateResMock.profiles.length; i++) {
      const profile = getEntityTemplateResMock.profiles[i];
      const profileHeaders = fixture.nativeElement.getElementsByTagName('H4');

      const profileHeader = (<HTMLElement[]>Array.from(profileHeaders)).filter((header) => {
        return header.textContent === profile.name;
      });

      expect(profileHeader.length).toEqual(1);
      expect(profileHeader[0].textContent).toEqual(profile.name);

      for (let j = 0; j < profile.fields.length; j++) {
        const field = profile.fields[j];
        const fieldLabels: HTMLCollection = fixture.nativeElement.getElementsByTagName('LABEL');

        const fieldLabel = (<HTMLLabelElement[]>Array.from(fieldLabels)).filter((label) => {
          return label.htmlFor === field.name;
        });

        expect(fieldLabel.length).toEqual(1);
        expect(fieldLabel[0].textContent).toEqual(field.name);
      }
    }
  });

  it('validate input should throw Softheon Forge API URL is required', (done) => {
    component.formRendererConfig = {
      forgeApiUrl: null,
      accountName: 'TEST',
      formName: 'TEST',
      oauthToken: 'TEST',
      displayFormName: true
    };

    component.renderForm().catch((err: Error) => {
      expect(err.message).toEqual('Softheon Forge API URL is required.');
      done();
    });
  });

  it('validate input should throw Account Name is required', (done) => {
    component.formRendererConfig = {
      forgeApiUrl: 'TEST',
      accountName: null,
      formName: 'TEST',
      oauthToken: 'TEST',
      displayFormName: true
    };

    component.renderForm().catch((err: Error) => {
      expect(err.message).toEqual('Account Name is required.');
      done();
    });
  });

  it('validate input should throw Entity Template Name is required', (done) => {
    component.formRendererConfig = {
      forgeApiUrl: 'TEST',
      accountName: 'TEST',
      formName: null,
      oauthToken: 'TEST',
      displayFormName: true
    };

    component.renderForm().catch((err: Error) => {
      expect(err.message).toEqual('Entity Template Name is required.');
      done();
    });
  });

  it('validate input should throw OAuth Token is required', (done) => {
    component.formRendererConfig = {
      forgeApiUrl: 'TEST',
      accountName: 'TEST',
      formName: 'TEST',
      oauthToken: null,
      displayFormName: true
    };

    component.renderForm().catch((err: Error) => {
      expect(err.message).toEqual('OAuth Token is required.');
      done();
    });
  });

  it('calls submit and still is valid', () => {
    component.ngOnChanges(null);
    component.submit();

    component.entityForm = new FormGroup({
      optionA: new FormControl(false),
      optionB: new FormControl(false),
    });

    component.formRendererConfig.displayFormName = null;
    component.entityTemplateModel = JSON.parse(JSON.stringify(getEntityTemplateResMock));
    const profiles = new Array<ProfileTemplateModel>();
    profiles.push(component.entityTemplateModel.profiles[0]);
    const fields = new Array<FieldTemplateModel>();
    fields.push(profiles[0].fields[0]);
    profiles[0].fields = fields;
    profiles[0].fields[0].type = 'Test';
    component.entityTemplateModel.profiles = profiles;

    component.renderForm();
    const res = component.submit();

    expect(res).toBeDefined();
  });
});
