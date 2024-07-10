import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DraftlistPageRoutingModule } from './draftlist-routing.module';

import { DraftlistPage } from './draftlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DraftlistPageRoutingModule
  ],
  declarations: [DraftlistPage]
})
export class DraftlistPageModule {}
