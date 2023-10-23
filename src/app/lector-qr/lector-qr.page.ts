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
    this.isVisible = false;
    this.route.queryParams.subscribe(params => {
      this.nombre = params['username'];
    }) 
    
  }

  ngOnInit() {
    console.log(this.nombre);
  }

  

  segmentChanged(event: any) {
    // Detecta cuándo cambia el segmento y actualiza el valor de activeSegment
    this.selectedTab = event.detail.value;
  }

  async scanQRCode() {
    const result = await BarcodeScanner.startScan();
    if (result.hasContent) {
      console.log('Contenido del código QR:', result.content);
      this.qrResult = result.content; 
      const datosEscaneados = this.qrResult.split(',');
      this.storage.setvalue('Profesor', datosEscaneados);
      this.navCtrl.navigateForward('/clase');
      if(datosEscaneados){
        this.isVisible = true;
      }
      
      
      
    } else {
      // No se detectó ningún código QR
      console.log('No se detectó ningún código QR');
    }
  }

  
}
