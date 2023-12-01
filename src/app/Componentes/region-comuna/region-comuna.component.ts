import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatosRegionComunaService } from 'src/app/Servicios/datos-region-comuna.service';
import { StorageService } from 'src/app/Servicios/storage.service';

@Component({
  selector: 'app-region-comuna',
  templateUrl: './region-comuna.component.html',
  styleUrls: ['./region-comuna.component.scss'],
})
export class RegionComunaComponent  implements OnInit {
  @Output() regionSeleccionada1 = new EventEmitter<string>();
  @Output() comunaSeleccionada1 = new EventEmitter<string>();

  regionSeleccionada: number | undefined;
  
  regiones: any[] = [];

  comunaSeleccionada: string="";

  

  comunas: any[] = [];
  

  isVisible: boolean = true;


  constructor(private storage: StorageService ,private datosRegionalesService: DatosRegionComunaService) { 
    this.isVisible = false;
  }



  habilitarComuna(){
    this.isVisible = true;
    const regionSeleccionada = this.regionSeleccionada;
    this.datosRegionalesService.obtenerComunasPorRegion(regionSeleccionada).subscribe(
      (data) => {
        this.comunas = data.data; 
        
      },
      (error) => {
        console.error('Error al obtener las comunas: ', error);
      }
    );
  }

  guardarInfo(event: any) {
    const regionSeleccionada = this.regionSeleccionada;
    
    
    
    
    const comunaSeleccionada = this.comunaSeleccionada
    

    
  }

  ngOnInit() {
    this.obtenerRegiones();
  }

  obtenerRegiones(){
    this.datosRegionalesService.obtenerDatosRegionales().subscribe(
      (data) => {
        this.regiones = data.data;
        
      },
      (error) =>{
        console.error('Error al obtener las regiones: ', error);
        
      }
    );
  }

  seleccionarRegion(event: any) {
    const regionSeleccionada = event.detail.value; // Obtenemos el valor seleccionado
    this.regionSeleccionada1.emit(regionSeleccionada); // Emitimos el evento con la región seleccionada

    // Ejecutar habilitarComuna() aquí si es necesario
    this.habilitarComuna();

    // También puedes llamar a la función para obtener comunas aquí si es necesario
  }

  seleccionarComuna(event: any) {
    const comunaSeleccionada = event.detail.value
    this.comunaSeleccionada1.emit(comunaSeleccionada);
  }
}
