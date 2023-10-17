import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { 
    this.storage.create();
  }

  async Setvalue(key: string, value: any){
    const guardado = await this.storage.set(key, value);
    console.log(guardado);
    
  }

  async Getvalue(key: string){
    const recuperado = await this.storage.get(key);
    console.log(recuperado);
    
  };
}
