import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegionComunaComponent } from '../Componentes/region-comuna/region-comuna.component';



import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { StorageService } from '../Servicios/storage.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule
  ],
  declarations: [RegisterPage, RegionComunaComponent]
})
export class RegisterPageModule {}
