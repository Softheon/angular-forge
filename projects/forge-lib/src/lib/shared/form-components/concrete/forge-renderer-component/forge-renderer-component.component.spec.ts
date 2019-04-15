import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ForgeRendererComponent } from './forge-renderer-component.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { TextFieldComponent } from '../text-field/text-field.component';
import { HttpClientModule } from '@angular/common/http';

describe('ForgeRendererComponent', () => {
  let component: ForgeRendererComponent;
  let fixture: ComponentFixture<ForgeRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ForgeRendererComponent,
        TextFieldComponent
      ],
      imports: [
        FormsModule,
        HttpClientModule
      ]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [TextFieldComponent]
      }
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgeRendererComponent);
    component = fixture.componentInstance;
    component.component = new TextFieldComponent();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

