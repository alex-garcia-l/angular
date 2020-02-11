import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interface/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  equipo: any = [];
  cargadaInfo = false;
  cargadaEquipo = false;

  constructor(private http: HttpClient) {
    console.log("Servicio de pagina");
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    this.http.get('assets/data/data-page.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargadaInfo = true;
      this.info = resp;
      // console.log(resp);
    });
  }

  private cargarEquipo() {
    this.http.get('https://first-app-2889d.firebaseio.com/equipo.json')
    .subscribe( (resp: any) => {
      this.cargadaEquipo = true;
      this.equipo = resp;
      // console.log(resp);
    });
  }
}
