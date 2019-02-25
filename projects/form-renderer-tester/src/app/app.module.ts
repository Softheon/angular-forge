import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormRendererLibModule } from 'form-renderer-lib';

import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';
import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormRendererLibModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
