import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ForgeComponent } from './forge-component.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material';
import { TextFieldComponent } from '../text-field/text-field.component';
import { HttpClientModule } from '@angular/common/http';

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
        HttpClientModule
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
    component.createModal = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});