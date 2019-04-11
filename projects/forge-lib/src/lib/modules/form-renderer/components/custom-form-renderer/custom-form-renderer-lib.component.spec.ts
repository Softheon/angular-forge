import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomFormRendererLibComponent } from './custom-form-renderer-lib.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFormRendererLibComponent);
    component = fixture.componentInstance;
    component.formRendererConfig = {
      oauthToken: "",     
      forgeApiUrl: "",     
      accountName: "",
      formName: "",
      displayFormName: false
      }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
