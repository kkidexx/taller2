import { Component, inject } from '@angular/core';
import { ProductosComponent } from '../../pages/productos/productos.component';
import { ProductosService } from '../../services/productos.service';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../carrito.service';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  producto: any[] = [];

  constructor(
    private productosService: ProductosService,
    private carritoService: CarritoService
  ) { }

  ngOnInit() {
    this.productosService.getProductos().subscribe(p => {
      this.producto = p;
    });
  }

  eliminar(id: any) {
    this.productosService.deleteProducto(id).subscribe(() => {
      this.producto = this.producto.filter(item => item.id !== id);
    });
  }

  agregarAlCarrito(item: any) {
    this.carritoService.agregarAlCarrito(item);
  }
}
  







   

 