import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonCard, IonInput, NavController } from '@ionic/angular';
import { StorageService } from '../Servicios/storage.service';
import {Camera,CameraDirection,CameraResultType, CameraSource } from '@capacitor/camera';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';




@Component({
  selector: 'app-lector-qr',
  templateUrl: './lector-qr.page.html',
  styleUrls: ['./lector-qr.page.scss'],
})
export class LectorQRPage implements OnInit {
  @ViewChild('verVista', { static: false }) verVista!: IonCard;
  qrResult: string = ''; 
  cameraImage: any;
  selectedTab: string='';
  isScanning: boolean = false;
  nombre: string = ""
  isVisible: boolean=true;
  

  @ViewChild('videoElement', { static: true }) videoElement: ElementRef | undefined;
  constructor(private storage: StorageService,private route: ActivatedRoute, private navCtrl: NavController) { 

    this.route.queryParams.subscribe(params => {
      this.nombre = params['username'];
    }) 
    
  }

  ngOnInit() {
    console.log(this.nombre);
  }

  
  async scanQRCode() {
    try {
      await BarcodeScanner.checkPermission()
      const result = await BarcodeScanner.startScan();
      if (result.hasContent) {
        console.log('Contenido del código QR:', result.content);
        BarcodeScanner.stopScan();
        this.qrResult = result.content; 
        const datosEscaneados = this.qrResult.split(',');
        this.storage.setvalue('Profesor', datosEscaneados);
        this.navCtrl.navigateForward('/clase');
      } else {
        // No se detectó ningún código QR
        console.log('No se detectó ningún código QR');
      }
    }catch (error){
      console.error("No se pudo iniciar el escaner", error);
      
    }
  }

  
}
