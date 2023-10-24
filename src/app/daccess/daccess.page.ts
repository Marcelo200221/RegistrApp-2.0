import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-daccess',
  templateUrl: './daccess.page.html',
  styleUrls: ['./daccess.page.scss'],
})
export class DaccessPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  volverLogin(){
    this.navCtrl.navigateBack('/login');
  }

}
