import { Component, OnInit, Input, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { FormComponent } from '../../abstract/form-component';
import { registry } from '../../registry';


@Component({
  selector: 'forge-builder-component',
  templateUrl: './forge-component.component.html',
  styleUrls: ['./forge-component.component.css']
})
export class ForgeComponent implements OnInit {
  @ViewChild('vc', { read: ViewContainerRef }) vc: ViewContainerRef;

  @Input() public component: FormComponent;

  constructor(
    private resolver: ComponentFactoryResolver
  ) { }

  public ngOnInit(): void {
    const factory = this.resolver.resolveComponentFactory(registry.get(this.component.constructor.name));
    this.vc.clear();
    const newComponent = this.vc.createComponent(factory);
    newComponent.instance.id = this.component.id;
  }
}
