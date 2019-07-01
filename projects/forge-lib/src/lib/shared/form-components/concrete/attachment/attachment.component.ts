import { Component, OnInit } from '@angular/core';

import { FileUploader, FileUploaderOptions, FileItem } from 'ng2-file-upload';

import { FormComponent } from '../../abstract/form-component';
import { AttachmentValidation } from './attachment-validation';
import { AttachmentData } from './attachment-data';
import { AttachmentDisplay } from './attachment-display';
import { mimeType } from './mimeTypes';
import { FormApi } from '../../abstract/form-api';
import { ComponentTypes } from '../../../constants/component-types';
import { FormConditional } from '../../abstract/form-conditional';

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
   * Conditional attributes
   */
  public conditional: FormConditional = new FormConditional();

  /**
   * Is over file size limit
   */
  public isMaxSizeOver: boolean;

  /**
   * the value to eventually return
   */
  public value: Array<any> = [];

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
    this.uploader.onAfterAddingFile = (fileItem) => {
      let fileCount: number = this.uploader.queue.length;
      if (fileCount > 0) {
        let fileReader = new FileReader();
        fileReader.onloadend = (e) => {
          let imageData = fileReader.result;
          let rawData = (imageData as string).split("base64,");
          if (rawData.length > 1) {
            this.value.push({ file: this.uploader.queue[this.uploader.queue.length - 1].file, blob: rawData[1] });
          }
        }
        fileReader.readAsDataURL(fileItem._file);
      }   
    }
  };

  /**
   * Gets the value
   */
  public getValue(): any {
    return this.value;
  }

  /**
   * Removes the file item from the uploader queue
   * @param item The file item to remove
   */
  public removeItem(item: FileItem): void {
    //TODO:: Delete files from "value" when removed from here
    this.isMaxSizeOver = false;
    item.remove();
  }

  /**
   * Gets allowed mime types
   */
  public getAllowedMimeTypes(): string[] {
    const res: string[] = new Array<string>();
    if (this.validation.allowedFileExtensions && this.validation.allowedFileExtensions.length > 0) {
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
