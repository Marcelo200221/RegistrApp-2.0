import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.component.html',
  styleUrls: ['./geolocalizacion.component.scss'],
})
export class GeolocalizacionComponent  implements OnInit {

  coordenadas: any;

  constructor() { 
    this.coordenadas = {coords: {latitude: 0, longitude: 0, altitude: null, accuracy: 0, altitudeAccuracy: null, heading: null, speed: null}, timestamp: 0}
  }

  ngOnInit() {
    this.printCurrentPosition();
  }

  async printCurrentPosition(){
    const coordinates = await Geolocation.getCurrentPosition();
    this.coordenadas = coordinates;
  
  };

}
