import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxEditorDataComponent } from './checkbox-editor-data.component';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from '../../../../form-components/concrete/checkbox/checkbox.component';

describe('CheckboxEditorDataComponent', () => {
  let component: CheckboxEditorDataComponent;
  let fixture: ComponentFixture<CheckboxEditorDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CheckboxEditorDataComponent,
        CheckboxComponent
       ],
       imports: [
         FormsModule
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxEditorDataComponent);
    component = fixture.componentInstance;
    component.component = new CheckboxComponent();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
