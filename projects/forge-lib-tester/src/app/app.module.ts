import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormRendererLibModule, FormBuilderLibModule} from 'forge-lib';

import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';
import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './form/form.component';
import { BuilderComponent } from './builder/builder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomFormComponent } from './custom-form/custom-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    FormComponent,
    BuilderComponent,
    CustomFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormRendererLibModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormBuilderLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
