import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import {Camera,CameraDirection,CameraResultType, CameraSource } from '@capacitor/camera';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';




@Component({
  selector: 'app-lector-qr',
  templateUrl: './lector-qr.page.html',
  styleUrls: ['./lector-qr.page.scss'],
})
export class LectorQRPage implements OnInit {
  qrResult: string = ''; 
  
  isScanning: boolean = false;
  nombre: string = ""

  @ViewChild('videoElement', { static: true }) videoElement: ElementRef | undefined;
  constructor(private route: ActivatedRoute, private navCtrl: NavController) { 
    
    this.route.queryParams.subscribe(params => {
      this.nombre = params['username'];
    }) 
    
  }

  ngOnInit() {
    console.log(this.nombre);
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      direction: CameraDirection.Front, // Esto selecciona la cámara frontal
    });
  
    // La imagen se ha capturado exitosamente y puedes hacer algo con ella aquí
    console.log('Imagen capturada:', image.webPath);
  }

  async scanQRCode() {
    const result = await BarcodeScanner.startScan();
    if (result.hasContent) {
      console.log('Contenido del código QR:', result.content);
      this.qrResult = result.content; 
      const datosEscaneados = this.qrResult.split(',');
      localStorage.setItem('Profesor', JSON.stringify(datosEscaneados));
      
      this.navCtrl.navigateForward('/clase');
      this.takePicture();
      
    } else {
      // No se detectó ningún código QR
      console.log('No se detectó ningún código QR');
    }
  }

  
}
