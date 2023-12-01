import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonCard, IonInput, LoadingController, NavController, ToastController } from '@ionic/angular';
import { StorageService } from '../Servicios/storage.service';
import jsQR from 'jsqr';
import {Camera,CameraDirection,CameraResultType, CameraSource } from '@capacitor/camera';




@Component({
  selector: 'app-lector-qr',
  templateUrl: './lector-qr.page.html',
  styleUrls: ['./lector-qr.page.scss'],
})
export class LectorQRPage implements OnInit {
  @ViewChild('verVista', { static: false }) verVista!: IonCard;
  @ViewChild('video', { static: false }) video!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas', { static: false }) canvas!: ElementRef<HTMLVideoElement>;

  videoElement : any;
  canvasElement: any;
  canvasContext: any;
  hasScanned = false;
  videoStream: MediaStream | null = null;

  loggedInUser: { username: string; password: string} | null = null;
  registerUser: { nombre: string; rut: string; carrera: string; username: string; clave: string; region: string; comuna: string} | null = null;
  scanActive = false;
  qrResult: string = ''; 
  cameraImage: any;
  selectedTab: string='';
  isScanning: boolean = false;
  nombre: string = ""
  isVisible: boolean=true;

  loading: HTMLIonLoadingElement | null = null; 
  

  constructor(public toastCtrl: ToastController,private loadingCtrl: LoadingController ,private storage: StorageService,private route: ActivatedRoute, private navCtrl: NavController) { 

    this.route.queryParams.subscribe(params => {
      this.nombre = params['username'];
    }) 

    this.qrResult = '';
    
  }

  ngAfterViewInit() {
    this.videoElement = this.video.nativeElement;
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');
  }

  async ngOnInit() {
    await this.storage.getvalue('Sesion de usuario');
    await this.storage.getvalue('Nuevo usuario');
    


    const datosConfUsuario = await this.storage.getvalue('Nuevo usuario');
    const datosUsuario = await this.storage.getvalue('Sesion de usuario');

    
    

    if(datosUsuario && (datosUsuario.Usuario == datosConfUsuario.Nombre_Usuario && datosUsuario.Contraseña == datosConfUsuario.Clave)){
      this.loggedInUser = datosUsuario
    }else{
      this.navCtrl.navigateForward('/daccess');
    }
  }

  

  
  async startScan() {
    if (!this.hasScanned) {
      this.videoStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }
      });
  
      this.videoElement.srcObject = this.videoStream;
      this.videoElement.setAttribute('playsinline', true);
      this.videoElement.play();

      this.loading = await this.loadingCtrl.create({})
      await this.loading.present()
  
      requestAnimationFrame(this.scan.bind(this));
    }
  }

  async scan() {
    if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {
      if (this.loading) {
        await this.loading.dismiss();
        this.loading = null;
        this.scanActive = true;
      }
    } else {
      requestAnimationFrame(this.scan.bind(this));
    }
  
    this.canvasElement.height = this.videoElement.videoHeight;
    this.canvasElement.width = this.videoElement.videoWidth;
  
    this.canvasContext.drawImage(
      this.videoElement,
      0,
      0,
      this.canvasElement.width,
      this.canvasElement.height
    );
  
    const imageData = this.canvasContext.getImageData(
      0,
      0,
      this.canvasElement.width,
      this.canvasElement.height
    );
  
    const code = jsQR(imageData.data, imageData.width, imageData.height, {
      inversionAttempts: 'dontInvert'
    });
    
  
    if (code && this.scanActive) {
      this.scanActive = false;
      this.qrResult = code.data;
      const datosEscaneados = this.qrResult.split(',');
      this.showQrToast(this.qrResult);

      this.storage.setvalue('Datos Qr', datosEscaneados);
      this.navCtrl.navigateForward('/clase');
    } else {
      if (this.scanActive) {
        requestAnimationFrame(this.scan.bind(this));
      }
    }
  }

  stopScan(){
    this.scanActive = false;
  }

  async showQrToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: `Se ha escaneado correctamente el código QR`,
      position: 'top',
      duration: 15000,
      buttons: [
        {
          text: 'Ver detalles',
          handler: () => {
            const qrData = this.qrResult;
            
          }
        }
      ]
    });
    await toast.present();
  }

  
  volver(){
    this.navCtrl.navigateBack('/login');
  }

  
}
