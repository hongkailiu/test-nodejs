import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from './test/test.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
    {
        path: 'test',
        component: TestComponent,
        children: [
            {
                path: 'status',
                component: StatusComponent
            }
        ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }