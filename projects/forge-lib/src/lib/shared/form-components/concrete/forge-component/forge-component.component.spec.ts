import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ForgeComponent } from './forge-component.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material';
import { TextFieldComponent } from '../text-field/text-field.component';

describe('ForgeComponent', () => {
  let component: ForgeComponent;
  let fixture: ComponentFixture<ForgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ForgeComponent,
        TextFieldComponent
      ],
      imports: [
        FormsModule,
        MatDialogModule,
        // MockModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { } },
        { provide: MatDialogRef, useValue: {} }
      ],
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [TextFieldComponent]
      }
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgeComponent);
    component = fixture.componentInstance;
    component.component = new TextFieldComponent();
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

// import { Component, NgModule } from '@angular/core';

// @Component({
//   template: '<div> </div>'
// })
// class TextFieldComponent {   
//    id;
//    type;
//    display;
//    validation;
//    data;
//    api;
//    getValue;
//    constructor() {}
// }

// @NgModule({
//   declarations: [
//     TextFieldComponent
//   ],
//   entryComponents: [
//     TextFieldComponent
//   ],
//   exports: [
//     TextFieldComponent
//   ]
// })
// class MockModule { }