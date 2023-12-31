import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import type { Animation} from '@ionic/angular';
import { AnimationController, IonCard , NavController } from '@ionic/angular';
import {Camera,CameraDirection,CameraResultType, CameraSource } from '@capacitor/camera';
import { StorageService } from '../Servicios/storage.service';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.page.html',
  styleUrls: ['./clase.page.scss'],
})
export class ClasePage implements OnInit {
  @ViewChildren(IonCard, { read: ElementRef }) cardElements!: QueryList<ElementRef<HTMLIonCardElement>>;


  loggedInUser: { username: string; password: string} | null = null;
  registerUser: { nombre: string; rut: string; carrera: string; username: string; clave: string; region: string; comuna: string} | null = null;

  registroRecupParseado: any;
  registroProfeParseado: any;

  formatedtime: string="";

  nombre: string = ""
  apellido: string = ""
  rut: string = ""

  Profe:  string=""
  hora: string=""
  sala: string=""
  dia: string=""

  isVisible: boolean=true;
  isVisible2: boolean=true;

  cameraImage: any;

  private animation!: Animation;

  

  constructor(private storage: StorageService ,private route: ActivatedRoute, private animationCtrl: AnimationController, private navCtrl: NavController) {
    const timestamp = Date.now();
    const fecha = new Date(timestamp);

    this.formatedtime = fecha.toLocaleDateString();
    this.isVisible = false;
  }

  async ngOnInit() {
        await this.storage.getvalue('Nuevo usuario');
        await this.storage.getvalue('Sesion de usuario');
        const datosUsuario = await this.storage.getvalue('Sesion de usuario');
        const datosConfUsuario = await this.storage.getvalue('Nuevo usuario');

        if(datosUsuario && (datosUsuario.Usuario == datosConfUsuario.Nombre_Usuario && datosUsuario.Contraseña == datosConfUsuario.Clave)){
          this.loggedInUser = datosUsuario
        }else{
          this.navCtrl.navigateForward('/daccess');
        }
        
        let registroProfe = await this.storage.getvalue('Datos Qr');
        let registroRecup = await this.storage.getvalue('Nuevo usuario');

        if(registroProfe){
          try{
            this.registroProfeParseado = registroProfe;
            this.Profe = this.registroProfeParseado[0];
            this.hora = this.registroProfeParseado[1];
            this.sala = this.registroProfeParseado[2];
            this.dia = this.registroProfeParseado[3];

            
          } catch(error){
            console.error('Error al analizar el valor del LocalStorage:', error);
          }
        }


        if (registroRecup) {
          try {
            // Intenta analizar el valor como un arreglo JSON
            
            
              this.nombre = registroRecup.nombre;
              this.apellido = registroRecup.apellido;
              this.rut = registroRecup.Rut;
      
          } catch (error) {
            console.error('Error al analizar el valor del LocalStorage:', error);
          }
        }
    
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera, 
    });
    this.cameraImage = image.webPath;
    image.dataUrl = this.cameraImage;
    if(this.cameraImage){
      this.isVisible = true;
      this.isVisible2 = false;
    }

   
  
    // La imagen se ha capturado exitosamente y puedes hacer algo con ella aquí
  }

  ngAfterViewInit() {
    const cardA = this.animationCtrl
      .create()
      .addElement(this.cardElements.first.nativeElement)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '1' },
        { offset: 0.5, transform: 'scale(1.5)', opacity: '0.3' },
        { offset: 1, transform: 'scale(1)', opacity: '1' },
      ]);

    const cardB = this.animationCtrl
      .create()
      .addElement(this.cardElements.last.nativeElement)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '1' },
        { offset: 0.5, transform: 'scale(1.5)', opacity: '0.3' },
        { offset: 1, transform: 'scale(1)', opacity: '1' },
      ]);

    this.animation = this.animationCtrl
      .create()
      .duration(2000)
      .iterations(1)
      .addAnimation([cardA, cardB]);
  }

  play(){
    this.animation.play();
  }

  ionViewDidEnter(){
    this.play()
  }

  volver(){
    this.navCtrl.navigateBack('/home');
  }





}
