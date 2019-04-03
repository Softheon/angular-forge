import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailEditorDataComponent } from './email-editor-data.component';

describe('EmailEditorDataComponent', () => {
  let component: EmailEditorDataComponent;
  let fixture: ComponentFixture<EmailEditorDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailEditorDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailEditorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
