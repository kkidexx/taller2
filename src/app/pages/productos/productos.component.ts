import { Component, inject } from '@angular/core';
import { TablaComponent } from '../../componet/tabla/tabla.component';
import { ProductosService } from '../../services/productos.service';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [TablaComponent,FormularioComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  ngOnInit() {

    console.log("Hola")

  }
  

  

   }

   


