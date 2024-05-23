import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  carrito: any[] = [];


  constructor(private http: HttpClient) { }

  private API_PRODUCTOS = 'http://localhost:9090/autores';
  private API_USERS = 'http://localhost:3000/login';
  
  

  getProductos(): Observable<any> {
    return this.http.get(this.API_PRODUCTOS);
  }

  postUserss(usuario: any): Observable<any> {
    return this.http.post(this.API_USERS, usuario);
  }

  getProducto(): Observable<any> {
    return this.http.get(this.API_PRODUCTOS);
  }

  getProductoID(id: any): Observable<any> {
    return this.http.get(`${this.API_PRODUCTOS}/${id}`).pipe(
      map((producto: any) => {
        // Convertir el producto a un array para poder ordenarlo
        const productosArray = [producto];
        // Ordenar el array por ID
        productosArray.sort((a, b) => a.id - b.id);
        // Retornar el primer elemento del array (el producto ordenado)
        return productosArray[0];
      })
    );
  }

  postProducto(producto: any): Observable<any> {
    return this.http.post(this.API_PRODUCTOS, producto);
  }

  putProducto(producto: any): Observable<any> {
    return this.http.put(`${this.API_PRODUCTOS}/${producto.id}`, producto);
  }

  deleteProducto(id: any): Observable<any> {
    return this.http.delete(`${this.API_PRODUCTOS}/${id}`);
  }
  
}
