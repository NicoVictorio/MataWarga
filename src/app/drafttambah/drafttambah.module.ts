import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrafttambahPageRoutingModule } from './drafttambah-routing.module';

import { DrafttambahPage } from './drafttambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrafttambahPageRoutingModule
  ],
  declarations: [DrafttambahPage]
})
export class DrafttambahPageModule {}
