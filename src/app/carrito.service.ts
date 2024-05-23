import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  carrito: any[] = [];

  constructor() { }

  agregarAlCarrito(producto: any) {
    this.carrito.push(producto);
  }

  obtenerCarrito() {
    return this.carrito;
  }
}