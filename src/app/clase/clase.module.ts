import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClasePageRoutingModule } from './clase-routing.module';
import { GeolocalizacionComponent } from '../Componentes/geolocalizacion/geolocalizacion.component'; 

import { ClasePage } from './clase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClasePageRoutingModule
  ],
  declarations: [ClasePage, GeolocalizacionComponent]
})
export class ClasePageModule {}
