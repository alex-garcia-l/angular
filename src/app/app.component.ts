import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductoService } from './services/producto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  
  constructor(public _infoPagina: InfoPaginaService,
              public productosServicios: ProductoService) {
    //
  }
}
