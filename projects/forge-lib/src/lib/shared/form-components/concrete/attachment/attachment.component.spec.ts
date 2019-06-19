import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentComponent } from './attachment.component';
import { FileUploadModule, FileItem, FileUploader } from 'ng2-file-upload';

describe('AttachmentComponent', () => {
  let component: AttachmentComponent;
  let fixture: ComponentFixture<AttachmentComponent>;

  const id = 'attachment_0';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FileUploadModule
      ],
      declarations: [AttachmentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachmentComponent);
    component = fixture.componentInstance;
    component.id = id;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#getValue should throw error', () => {
    component.value = [];
    expect(component.getValue()).toEqual([]);
  });

  it('#removeItem should remove item', () => {
    const item: FileItem = new FileItem(new FileUploader(null), new File([''], 'filename', { type: 'text/html' }), null);
    const spy = spyOn(item, 'remove');
    component.removeItem(item);
    expect(spy).toHaveBeenCalled();
  });

  it('#getAllowedMimeTypes should get allowed mime types', () => {
    component.validation.allowedFileExtensions = ['.pdf', '.docx'];
    const res = component.getAllowedMimeTypes();
    expect(res.length).toEqual(2);
  });

  it('should display label', () => {
    component.display.label = 'Test Label';
    fixture.detectChanges();
    const label: HTMLParagraphElement = fixture.nativeElement.querySelector(`#label_${id}`);
    expect(label.innerText).toEqual('Test Label');
  });

  it('should hide label', () => {
    component.display.hideLabel = true;
    component.display.label = 'Test Label';
    fixture.detectChanges();
    const label: HTMLParagraphElement = fixture.nativeElement.querySelector(`#label_${id}`);
    expect(label).toBeNull();
  });

  it('should display description', () => {
    component.display.description = 'Test Description';
    fixture.detectChanges();
    const description: HTMLParagraphElement = fixture.nativeElement.querySelector(`#description_${id}`);
    expect(description.innerText).toEqual('Test Description');
  });
});
