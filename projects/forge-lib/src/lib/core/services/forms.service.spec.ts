import { TestBed } from '@angular/core/testing';

import { FormsService } from './forms.service';

import { Form } from '../../shared/models/form';
import { TextFieldComponent } from '../../shared/form-components/concrete/text-field/text-field.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('FormsService', () => {

  let formsService: FormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TextFieldComponent
      ],
      imports: [
        FormsModule,
        HttpClientModule
      ],
      providers: [FormsService]
    })
    formsService = TestBed.get(FormsService);

    formsService.form = new Form();
    formsService.form.name = "Test Form";
    formsService.form.components = [];
    let comp = new TextFieldComponent()
    comp.id = "test"
    formsService.form.components.push(comp)
  });

  it('should be created', () => {
    expect(formsService).toBeTruthy();
  });

  it('getComponent returns -1', () => {
    let val = formsService.getComponentLocByID("1")
    expect(val).toBe(-1)
  });

  it('getComponents return 0', () => {
    let val = formsService.getComponentLocByID("test");
    expect(val).toBe(0);
  })

  it('createFormJson creates a non 0 string', () => {
    let val = formsService.createFormJson();
    expect(val.length).toBeGreaterThan(0);
  })
});
