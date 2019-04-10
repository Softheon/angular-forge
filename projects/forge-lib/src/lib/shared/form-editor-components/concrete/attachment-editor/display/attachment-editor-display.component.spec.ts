import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentEditorDisplayComponent } from './attachment-editor-display.component';

describe('AttachmentEditorDisplayComponent', () => {
  let component: AttachmentEditorDisplayComponent;
  let fixture: ComponentFixture<AttachmentEditorDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachmentEditorDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachmentEditorDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
