import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosRegionComunaService {

  private apiUrl = 'https://dev.matiivilla.cl/duoc/location/region';
  private apiUrl2 = 'https://dev.matiivilla.cl/duoc/location/comuna/';

  constructor(private http: HttpClient) { }

  obtenerDatosRegionales(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  obtenerComunasPorRegion(regionId: any): Observable<any> {
    const url = `${this.apiUrl2}${regionId}`;
    return this.http.get<any>(url);
  }

}
