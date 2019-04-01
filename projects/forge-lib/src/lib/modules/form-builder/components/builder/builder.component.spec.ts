import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialogModule } from '@angular/material'
import { MatDialogRef } from '@angular/material';

import { FormsService } from '../../../../core/services/forms.service';

import { BuilderComponent } from './builder.component';

import { formsServiceMock } from '../../../../core/mocks/formsServiceMock';

describe('BuilderComponent', () => {
  let component: BuilderComponent;
  let fixture: ComponentFixture<BuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BuilderComponent
       ],
       imports: [
         DragDropModule,
         MatDialogModule
       ],
       schemas: [
          CUSTOM_ELEMENTS_SCHEMA
       ],
       providers: [
         {provide: FormsService, useValue: formsServiceMock},
         { provide: MatDialogRef, useValue: {} }
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
