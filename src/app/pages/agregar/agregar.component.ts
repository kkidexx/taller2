import { Component, inject } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {

  id:any
  nombreproducto:any
  codigo:any
  precio:any
  imagen:any
  descripcion:any
  
  servicio = inject(ProductosService)
  ruta = inject(ActivatedRoute)
  

  item: any;

  ngOnInit() {
    this.ruta.params.subscribe(r => {
      console.log(r);
      
      this.servicio.getProductoID(r['idAutor']).subscribe(p => {
    
        this.nombreproducto = p.nombreproducto
        this.precio= p.precio
        this.imagen= p.imagen

      })
    })
    
  }



}

