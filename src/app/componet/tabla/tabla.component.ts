import { Component, inject } from '@angular/core';
import { ProductosComponent } from '../../pages/productos/productos.component';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  servicio = inject(ProductosService)
  producto:any

  ngOnInit(){
    this.servicio.getProductos().subscribe(p =>{ 
      this.producto=p
     })
   
    
  }




   }
  
 