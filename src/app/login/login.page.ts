import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { StorageService } from '../Servicios/storage.service';
import type { Animation } from '@ionic/angular';
import { AlertController, AnimationController, IonCard, NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChildren(IonCard, { read: ElementRef }) cardElements!: QueryList<ElementRef<HTMLIonCardElement>>;

  loggedInUser: { username: string; password: string} | null = null;
  registerUser: { nombre: string; rut: string; carrera: string; username: string; clave: string; region: string; comuna: string} | null = null;

  private animation!: Animation;
  private animation2!: Animation;
  private animationExito!: Animation;
  private animationExito1!: Animation;

  registroRecupParseado: any;

  nombre: string="";
  nombreValido: boolean=false;
  clave: string="";
  claveValida: boolean=false;
  
  
  constructor(private navCtrl: NavController, private animationCtrl: AnimationController, private alertController: AlertController, private storage: StorageService ) { 
    
  }

  

  async ngOnInit() {
      await this.storage.getvalue('Nuevo usuario');
      await this.storage.getvalue('Sesion de usuario');

      const datosUsuario = await this.storage.getvalue('Sesion de usuario');
      const datosConfUsuario = await this.storage.getvalue('Nuevo usuario');
      const usuarioConf = {username: datosConfUsuario.Nombre_Usuario, clave: datosConfUsuario.Clave}
      
      
      

      if(datosUsuario && (datosUsuario.Usuario == datosConfUsuario.Nombre_Usuario && datosUsuario.Contraseña == datosConfUsuario.Clave)){
        this.loggedInUser = datosUsuario
        const alert = await this.alertController.create({
          header: "Cuenta activa",
          message: "Se ha encontrado una cuenta iniciada, deseas continuar con esta cuenta?",
          buttons: [{
            text: "Si",
            handler: () => {
              this.navCtrl.navigateForward('/lector-qr')
            },
  
          },{
            text: 'No',
            role: 'cancel',
            handler: () =>{
              this.navCtrl.navigateBack('/register')
              
            }
          }]
        })
        await alert.present();
      }
    
      let registroRecup = localStorage.getItem('Nuevo usuario');


      if (registroRecup) {
        try {
          // Intenta analizar el valor como un arreglo JSON
          this.registroRecupParseado = JSON.parse(registroRecup);
          
          if (Array.isArray(this.registroRecupParseado)) {
            // Verifica que el resultado es un arreglo
            
          } else {
           
          }
        } catch (error) {
          console.error('Error al analizar el valor del LocalStorage:', error);
        }
      }
    
    
  }

  ionViewDidEnter() {
    window.addEventListener('datosActualizados', () => {
      let registroRecup = localStorage.getItem('Nuevo usuario');


      if (registroRecup) {
        try {
          // Intenta analizar el valor como un arreglo JSON
          this.registroRecupParseado = JSON.parse(registroRecup);
          
          if (Array.isArray(this.registroRecupParseado)) {
            // Verifica que el resultado es un arreglo
            
          } else {
            
          }
        } catch (error) {
          console.error('Error al analizar el valor del LocalStorage:', error);
        }
      }
    });
  }

  ngAfterViewInit() {
    const cardA = this.animationCtrl
      .create()
      .addElement(this.cardElements.first.nativeElement)
      .duration(1500)
      .iterations(1)
      .direction('alternate')
      .fromTo('background', 'white', 'Green');
    const cardB = this.animationCtrl
      .create()
      .addElement(this.cardElements.last.nativeElement)
      .duration(1500)
      .iterations(1)
      .direction('alternate')
      .fromTo('background', 'white', 'Green');

    const cardC = this.animationCtrl
      .create()
      .addElement(this.cardElements.last.nativeElement)
      .duration(1500)
      .iterations(1)
      .direction('alternate')
      .fromTo('background', 'white', 'Red');

    const cardD = this.animationCtrl
      .create()
      .addElement(this.cardElements.first.nativeElement)
      .duration(1500)
      .iterations(1)
      .direction('alternate')
      .fromTo('background', 'white', 'Red');

      this.animation = this.animationCtrl
      .create()
      .duration(500)
      .iterations(1)
      .addAnimation([cardA]);

      this.animation2 = this.animationCtrl
      .create()
      .duration(500)
      .iterations(2)
      .addAnimation([cardB]);

      this.animationExito = this.animationCtrl
      .create()
      .duration(500)
      .iterations(2)
      .addAnimation([cardC]);

      this.animationExito1 = this.animationCtrl
      .create()
      .duration(500)
      .iterations(2)
      .addAnimation([cardD]);
  }

  camposValidos(){
    if(this.clave.length<4){
      this.claveValida = true;
    }else{
      this.claveValida = false;
    }

    if(this.nombre.length<6){
      this.nombreValido = true;
    }else{
      this.nombreValido = false;
    }
  }

  play(){
    if(this.registroRecupParseado && this.clave == this.registroRecupParseado[5]){
      this.animation2.play();
    }else{
      this.animationExito.play();
    }
  }


  play2(){
    if(this.registroRecupParseado && this.nombre == this.registroRecupParseado[4]){
      this.animation.play()
    }else{
      this.animationExito1.play();
    }
  }
  
  async login(){
    if(this.registroRecupParseado){
      if(this.nombre != this.registroRecupParseado[4] || this.clave != this.registroRecupParseado[5]){
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'El usuario y contraseña ingresados no están registrados',
          buttons: ['OK']
        })
        await alert.present();
      }else{
        const usuario_actual = {Usuario: this.registroRecupParseado[4], Contraseña: this.registroRecupParseado[5]}
        this.storage.setvalue('Sesion de usuario', usuario_actual);
        this.navCtrl.navigateForward('/lector-qr', {
          queryParams:{
            username: this.nombre
          }
        })
      }
    }else{
      const alert = await this.alertController.create({
        header: "No hay datos registrados",
        message: "Registrate",
        buttons: [{
          text: "Si",
          handler: () => {
            this.navCtrl.navigateForward('/register')
          },

        },{
          text: 'No',
          role: 'cancel',
          handler: () =>{
            this.navCtrl.navigateBack('/home')
            
          }
        }]
      })
      await alert.present();
    }
  }

  registrar(){
    this.navCtrl.navigateForward('/register')
  }

  recuperar(){
    this.navCtrl.navigateForward('/cambio-clave')
  }

  volver(){
    this.navCtrl.navigateBack('/home');
  }


}
