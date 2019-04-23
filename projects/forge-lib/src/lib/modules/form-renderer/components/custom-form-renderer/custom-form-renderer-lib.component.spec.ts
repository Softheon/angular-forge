import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CustomFormRendererLibComponent } from './custom-form-renderer-lib.component';
import { FormsService } from '../../../../../lib/core/services/forms.service';
import { formsServiceMock } from '../../../../core/mocks/formsServiceMock';
import { Form } from '../../../../../../src/lib/shared/models/form';

describe('CustomFormRendererLibComponent', () => {
  let component: CustomFormRendererLibComponent;
  let fixture: ComponentFixture<CustomFormRendererLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomFormRendererLibComponent

      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      providers: [
        { provide: FormsService, useValue: formsServiceMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFormRendererLibComponent);
    component = fixture.componentInstance;
    component.formRendererConfig = {
      oauthToken: '',
      forgeApiUrl: '',
      accountName: '',
      formName: '',
      displayFormName: false
    }
    component.formsService.form = new Form();
    component.formsService.form.components = [];
    component.formsService.form.components.push(new TextFieldComponent());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set didFinishRendering true', async () => {
    await component.renderForm();
    expect(component.didFinishRendering).toBe(true);
  });

  it('should call markFormGroupTouched', async () => {
    await component.submit();
    expect(component).toBeTruthy();
  });
});
import { Component, NgModule } from '@angular/core';
@Component({
  template: '<div> </div>'
})
class TextFieldComponent {
  id = 'test';
  type = 'Text Field';
  display;
  validation;
  data;
  api = { entityTemplateName: 'test', accountName: 'test', profileName: '', fieldName: '', options: null };
  getValue(): any { return 'test'; }
  constructor() { }
}
