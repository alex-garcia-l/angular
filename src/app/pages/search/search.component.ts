import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  
  constructor( private route: ActivatedRoute, public productoService:ProductoService ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productoService.buscarProducto(params.termino);
    });
  }

}
