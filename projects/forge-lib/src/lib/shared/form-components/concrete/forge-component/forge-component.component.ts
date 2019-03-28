import { Component, OnInit, Input, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { FormComponent } from '../../abstract/form-component';
import { registry } from '../../registry';
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

  public dialogRef: MatDialogRef<any>;

  public hovered = false;

  constructor(
    private resolver: ComponentFactoryResolver,
    private dialog: MatDialog
  ) { }

  public ngOnInit(): void {
    const factory = this.resolver.resolveComponentFactory(registry.get(this.component.constructor.name));
    this.vc.clear();

    const newComponent = this.vc.createComponent(factory);
    newComponent.instance.id = this.component.id;
    this.component = newComponent.instance;
    this.dialogRef = this.dialog.open(FieldEditorComponent, {
      data: {
        field: this.component,
      },
      width: "80vw"
    });

  }
}

