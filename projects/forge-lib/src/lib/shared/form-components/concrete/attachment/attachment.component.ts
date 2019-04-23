import { Component, OnInit } from '@angular/core';

import { FileUploader, FileUploaderOptions, FileItem } from 'ng2-file-upload';

import { FormComponent } from '../../abstract/form-component';
import { AttachmentValidation } from './attachment-validation';
import { AttachmentData } from './attachment-data';
import { AttachmentDisplay } from './attachment-display';
import { mimeType } from './mimeTypes';
import { FormApi } from '../../abstract/form-api';
import { ComponentTypes } from '../../../constants/component-types';

const URL = 'blah';

@Component({
  selector: 'forge-renderer-attachment',
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.scss']
})
export class AttachmentComponent extends FormComponent implements OnInit {
  /**
   * The ID of the component
   */
  public id: string;

  /**
   * The type of the component
   */
  public type: string = ComponentTypes.Attachment;

  /**
   * Display attributes
   */
  public display: AttachmentDisplay = new AttachmentDisplay();

  /**
   * Validation attributes
   */
  public validation: AttachmentValidation = new AttachmentValidation();

  /**
   * Data attributes
   */
  public data: AttachmentData = new AttachmentData();

  /**
   * The file uploader
   */
  public uploader: FileUploader = new FileUploader({ url: URL });

  /**
   * The api attributes
   */
  public api: FormApi;

  /**
   * Is over file size limit
   */
  public isMaxSizeOver: boolean;

  /**
   * Initializes the component
   */
  public ngOnInit(): void {
    this.initializeUploader();
  }

  /**
   * Initializes the file uploader
   */
  public initializeUploader(): void {
    const fileOptions: FileUploaderOptions = {
      allowedMimeType: this.getAllowedMimeTypes(),
      maxFileSize: this.validation.maximumFileSize,
      queueLimit: this.validation.maximumQueueSize
    };
    this.uploader.setOptions(fileOptions);
  }

  /**
   * Gets the value
   */
  public getValue(): any {
    throw new Error('Method not implemented.');
  }

  /**
   * Removes the file item from the uploader queue
   * @param item The file item to remove
   */
  public removeItem(item: FileItem): void {
    this.isMaxSizeOver = false;
    item.remove();
  }

  /**
   * Gets allowed mime types
   */
  public getAllowedMimeTypes(): string[] {
    const res: string[] = new Array<string>();
    if (this.validation.allowedFileExtensions) {
      this.validation.allowedFileExtensions.forEach(item => {
        const type = mimeType[item];
        if (type) {
          res.push(type);
        }
      });
      return res;
    }

    return null; // Allow anything
  }
}
