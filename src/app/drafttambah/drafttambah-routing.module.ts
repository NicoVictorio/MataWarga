import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrafttambahPage } from './drafttambah.page';

const routes: Routes = [
  {
    path: '',
    component: DrafttambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrafttambahPageRoutingModule {}
