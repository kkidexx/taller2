import { Component } from '@angular/core';
import { ProductosComponent } from '../productos/productos.component';
import { ProductosService } from '../../services/productos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  
  constructor(private servicio: ProductosService){}

  id:any
  nombreproducto:any
  codigo:any
  precio:any
  imagen:any
  descripcion:any

  cargar(form: any) {


    this.servicio.postProducto(form.value).subscribe()
    window.location.reload();


  }
 
}




