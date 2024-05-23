import { Component, inject } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {

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
        this.id = p.id
        this.nombreproducto = p.nombreproducto
        this.codigo = p.codigo
        this.precio= p.precio
        this.imagen= p.imagen
        this.descripcion= p.descripcion

      })
    })
    
  }

  editar(data: any) {
    this.servicio.putProducto(data.value).subscribe()
    window.location.href='productos'
  }

}
