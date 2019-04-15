import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultsComponent } from './results/results.component';
import { FormComponent } from './form/form.component';
import { BuilderComponent } from './builder/builder.component';
import { CustomFormComponent } from './custom-form/custom-form.component';

const routes: Routes = [
    {
        path: 'results',
        component: ResultsComponent
    },
    {
        path: 'renderer',
        component: FormComponent
    },
    {
        path: 'builder',
        component: BuilderComponent
    },
    {
        path: 'custom-renderer',
        component: CustomFormComponent
    }
        
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
