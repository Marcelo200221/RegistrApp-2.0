import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaccessPageRoutingModule } from './daccess-routing.module';

import { DaccessPage } from './daccess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaccessPageRoutingModule
  ],
  declarations: [DaccessPage]
})
export class DaccessPageModule {}
