import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentEditorDataComponent } from './attachment-editor-data.component';

describe('AttachmentEditorDataComponent', () => {
  let component: AttachmentEditorDataComponent;
  let fixture: ComponentFixture<AttachmentEditorDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachmentEditorDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachmentEditorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
