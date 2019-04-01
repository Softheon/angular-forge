import { Injectable } from '@angular/core';
import { FormComponent } from '../../shared/form-components/abstract/form-component';
import { componentHostSyntheticProperty } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  public components: Array<FormComponent> = []

  constructor() { }

  public getComponentLocByID(id: String): number {
    for (let i = 0; i < this.components.length; i++) {
      if (this.components[i].id === id) {
        return i;
      }
    }
  }
}
