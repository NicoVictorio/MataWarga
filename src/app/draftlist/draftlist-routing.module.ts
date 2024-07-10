import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DraftlistPage } from './draftlist.page';

const routes: Routes = [
  {
    path: '',
    component: DraftlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DraftlistPageRoutingModule {}
