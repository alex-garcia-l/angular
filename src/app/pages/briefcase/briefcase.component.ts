import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-briefcase',
  templateUrl: './briefcase.component.html',
  styleUrls: ['./briefcase.component.sass']
})
export class BriefcaseComponent implements OnInit {

  constructor(public productosServicios: ProductoService) { }

  ngOnInit() {
  }

}
