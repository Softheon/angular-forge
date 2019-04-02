import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailEditorDisplayComponent } from './email-editor-display.component';
import { EmailComponent } from '../../../../form-components/concrete/email/email.component';
import { FormsModule } from '@angular/forms';

describe('EmailEditorDisplayComponent', () => {
  let component: EmailEditorDisplayComponent;
  let fixture: ComponentFixture<EmailEditorDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmailEditorDisplayComponent,
        EmailComponent
      ],
      imports: [
        FormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailEditorDisplayComponent);
    component = fixture.componentInstance;
    component.component = new EmailComponent;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
