import { Component, OnInit, Input, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { FormComponent } from '../../abstract/form-component';
import { getRegistryType } from '../../registry';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FieldEditorComponent } from '../../../../modules/form-builder/components/field-editor/field-editor.component';


@Component({
  selector: 'forge-builder-component',
  templateUrl: './forge-component.component.html',
  styleUrls: ['./forge-component.component.css']
})
export class ForgeComponent implements OnInit {
  @ViewChild('vc', { read: ViewContainerRef }) vc: ViewContainerRef;

  @Input() public component: FormComponent;

  @Input() public createModal = true;

  public dialogRef: MatDialogRef<any>;

  public hovered = false;

  constructor(
    private resolver: ComponentFactoryResolver,
    private dialog: MatDialog
  ) { }

  public ngOnInit(): void {
    let factory = this.resolver.resolveComponentFactory(getRegistryType(this.component.type));
    // if(this.component.constructor.name != 'undefined')
    // {
    //   factory = this.resolver.resolveComponentFactory(getRegistryType(this.component.constructor.name));
    // }
    this.vc.clear();

    const newComponent = this.vc.createComponent(factory);
    newComponent.instance.id = this.component.id;   
    newComponent.instance.api = this.component.api;
    newComponent.instance.data = this.component.data;
    newComponent.instance.display = this.component.display;
    newComponent.instance.validation = this.component.validation;
    this.component = newComponent.instance;

    if (this.createModal) {
      setTimeout(() => {
        this.dialogRef = this.dialog.open(FieldEditorComponent, {
          data: {
            field: this.component,
            isEdit: false
          },
          width: '80vw'
        });
        this.dialogRef.afterClosed().subscribe((data: any) => {
          this.component = data;
        })
      });
    }
  }
}

