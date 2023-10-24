import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaccessPage } from './daccess.page';

const routes: Routes = [
  {
    path: '',
    component: DaccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaccessPageRoutingModule {}
