import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { 
    this.storage.create();
  }

  async setvalue(key: string, value: any){
    const guardado = await this.storage.set(key, value);
    console.log(guardado);
    
  }

  async getvalue(key: string){
    return await this.storage.get(key);
    
  };

  async pushValue(key: string,nuevoValor: any){
    let valorExistente = await this.getvalue(key);
    if(valorExistente){
      if (Array.isArray(valorExistente)) {
        valorExistente.push(nuevoValor);
      } else {
        // Si no es un array, crea un nuevo array con el valor existente y el nuevo valor
        valorExistente = [valorExistente, nuevoValor];
      }
    } else {
      // Si no existe un valor, crea un nuevo array con el nuevo valor
      valorExistente = [nuevoValor];
    }

    await this.storage.set(key, valorExistente);
  }
}
