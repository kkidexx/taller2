import { Component } from '@angular/core';
import { CarritoService } from '../../carrito.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  productos: any[] = [
    { id: 1, nombreproducto: 'Producto 1', codigo: 'ABC123', precio: 10.99, imagen: 'url_imagen_1' },
    { id: 2, nombreproducto: 'Producto 2', codigo: 'DEF456', precio: 20.49, imagen: 'url_imagen_2' },
    { id: 3, nombreproducto: 'Producto 3', codigo: 'GHI789', precio: 15.29, imagen: 'url_imagen_3' }
  ];
  carrito: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  agregarAlCarrito(item: any) {
    this.carrito.push(item);
  }

  eliminar(id: number) {
    this.productos = this.productos.filter(item => item.id !== id);
  }
}




