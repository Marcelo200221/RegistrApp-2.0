import { Block } from '@angular/compiler';
import { ViewChild } from '@angular/core';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AlertController, IonInput, NavController } from '@ionic/angular';
import { StorageService } from '../Servicios/storage.service';

@Component({
  selector: 'app-cambio-clave',
  templateUrl: './cambio-clave.page.html',
  styleUrls: ['./cambio-clave.page.scss'],
})
export class CambioClavePage implements OnInit {
  @ViewChild('nuevaContraseña', { static: false }) nuevaContraseña!: IonInput;
  
  registroRecupParseado: any;

  Usuario: string="";
  ClaveNueva: string="";
  cambioSi: boolean=false;
  isVisible: boolean=true;
  constructor(private storage: StorageService,private alertController: AlertController, private cdr: ChangeDetectorRef, private navCtrl: NavController) { }

  ngOnInit() {
    let registroRecup = this.storage.getvalue('Nuevo usuario');
    this.registroRecupParseado = registroRecup;

  }

  ionViewDidEnter() {
    this.isVisible = false;
    this.nuevaContraseña.disabled = true;
  }

  async usuarioReconocido(){
    const cambioSi = document.getElementsByClassName('nuevaContra');
    if(this.Usuario == this.registroRecupParseado[4]){
        const alert = await this.alertController.create({
          header: "Hola " + this.Usuario,
          message: "Su contraseña anterior es: " + this.registroRecupParseado.Clave + " , deseas cambiarla?",
          buttons: [{
            text: "Sí",
            handler: () => {
              // Acción a realizar cuando se presiona "Sí"
              this.nuevaContraseña.disabled = false;
              this.isVisible = true;
              // Agrega aquí la lógica para cambiar la contraseña
            },
          },
          {
            text: "No",
            role: "cancel",
            handler: () => {
              // Acción a realizar cuando se presiona "No" o se cierra el cuadro de diálogo
              this.navCtrl.navigateForward('/login')
            },
          },],
        })
        await alert.present();
    }
  }

  async cambiarContra(){
    if(this.registroRecupParseado.Clave != this.ClaveNueva){
      this.registroRecupParseado.Clave = this.ClaveNueva;
      this.storage.setvalue('Nuevo usuario', JSON.stringify(this.registroRecupParseado));

      const alert = await this.alertController.create({
        header: "Cambio exitoso",
        message: "Tu contraseña se ha cambiado exitosamente",
        buttons: [{
          text:"OK",
          handler: () =>{
            const actualizacionEvento = new Event('datosActualizados');
            window.dispatchEvent(actualizacionEvento);
            this.navCtrl.navigateForward("/login");
          }
        }]
      })
      await alert.present();

    }else{
      const alert = await this.alertController.create({
        header: "Error",
        message: "No se pueden utilizar contraseñas usadas anteriormente",
        buttons: ["OK"],
      })
      await alert.present();
    }
    

  }

  cancelar(){
    this.navCtrl.navigateBack('/login');
  }

  volver(){
    this.navCtrl.navigateBack('/login');
  }

}
