import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ForgeComponent } from './forge-component.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { TextFieldComponent } from '../text-field/text-field.component';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material';

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
        MatDialogModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { field: new TextFieldComponent() } },
        { provide: MatDialogRef, useValue: {} }
      ]
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
