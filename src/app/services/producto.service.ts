import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interface/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: ProductoInterface[] = [];
  productosFiltrados: ProductoInterface[] = [];
  cargoProductos = false;

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    return new Promise((resolve, reject) => {
      this.http.get('https://first-app-2889d.firebaseio.com/productos_idx.json')
      .subscribe( (resp: ProductoInterface[]) => {
        this.cargoProductos = true;
        this.productos = resp;
        resolve();
      });
    });
  }

  getCargarProducto( id:string) {
    return this.http.get(`https://first-app-2889d.firebaseio.com/productos/${ id }.json`);
  }

  buscarProducto( termino:string ) {
    
    if (this.productos.length === 0) {
      this.cargarProductos().then( () => {
        this.filtrarProductos(termino);
      });
    } else {
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos( termino: string) {
    this.productosFiltrados = [];
    // this.productos.forEach( producto => {
    //   if (producto.categoria.indexOf(termino) >= 0) {
    //     this.productosFiltrados.push(producto);
    //   }
    // });

    this.productosFiltrados = this.productos.filter( (producto) => {
      return producto.categoria.toLowerCase().indexOf(termino.toLowerCase()) > -1
    });
  }
}
