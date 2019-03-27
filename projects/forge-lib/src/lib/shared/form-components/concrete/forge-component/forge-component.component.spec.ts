import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ForgeComponent } from './forge-component.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { TextFieldFormComponent } from '../text-field-form-component/text-field.component';

describe('ForgeComponent', () => {
  let component: ForgeComponent;
  let fixture: ComponentFixture<ForgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ForgeComponent,
        TextFieldFormComponent
      ],
      imports: [
        FormsModule
      ]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [TextFieldFormComponent]
      }
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgeComponent);
    component = fixture.componentInstance;
    component.component = new TextFieldFormComponent();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
