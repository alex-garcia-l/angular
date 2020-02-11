import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { ProductoService } from '../../services/producto.service'
import { ProductoDescripcion } from '../../interface/product-descripcion.interface'

@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html',
  styleUrls: ['./portafolio-item.component.sass']
})
export class PortafolioItemComponent implements OnInit {
  producto: ProductoDescripcion;
  id: string;

  constructor( private route: ActivatedRoute, public productoService: ProductoService ) { }

  ngOnInit() {
    this.route.params
        .subscribe(parametros => {
          this.productoService.getCargarProducto(parametros.id).subscribe((producto: ProductoDescripcion) => {
            this.producto = producto;
            this.id = parametros.id;
            console.log(producto);
          })
        });
  }
}
