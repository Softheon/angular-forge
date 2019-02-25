import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultsComponent } from './results/results.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
    {
        path: 'results',
        component: ResultsComponent
    },
    {
        path: '**',
        component: FormComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
