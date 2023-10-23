import { Component, OnInit } from '@angular/core';
import { Camera,CameraDirection, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-selfie',
  templateUrl: './selfie.page.html',
  styleUrls: ['./selfie.page.scss'],
})
export class SelfiePage implements OnInit {

  cameraImage: any;

  constructor() { }

  ngOnInit() {
  }

  async openCamera() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      direction: CameraDirection.Front,
    });
    
    console.log(image);
    this.cameraImage = image.webPath; // Asigna la ruta de la imagen para mostrarla en la vista.
  }
  

}
