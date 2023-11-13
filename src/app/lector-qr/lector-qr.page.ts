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
  loggedInUser: { username: string; password: string} | null = null;
  registerUser: { nombre: string; rut: string; carrera: string; username: string; clave: string; region: string; comuna: string} | null = null;
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

  async ngOnInit() {
    await this.storage.getvalue('Sesion de usuario');
    await this.storage.getvalue('Nuevo usuario');
    
    console.log(this.nombre);

    const datosConfUsuario = await this.storage.getvalue('Nuevo usuario');
    const datosUsuario = await this.storage.getvalue('Sesion de usuario');

    console.log(datosUsuario);
    

    if(datosUsuario && (datosUsuario.Usuario == datosConfUsuario.Nombre_Usuario && datosUsuario.Contraseña == datosConfUsuario.Clave)){
      this.loggedInUser = datosUsuario
    }else{
      this.navCtrl.navigateForward('/daccess');
    }
  }

  

  
  async scanQRCode() {
    try {
      const status = await BarcodeScanner.checkPermission()
      if(status.granted){
        console.log(status.granted);
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
      }
      
    }catch (error){
      console.error("No se pudo iniciar el escaner", error);
      
    }
  }
  
  volver(){
    this.navCtrl.navigateBack('/login');
  }

  
}
