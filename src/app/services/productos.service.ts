import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  private API_PRODUCTOS = 'http://localhost:3000/productos'

  private API_USERS='http://localhost:3000/users';


  getProductos():Observable <any>{ 
    return this.http.get(this.API_PRODUCTOS) 
   }

   postUserss(usuario:any): Observable<any>{
    return this.http.post(this.API_USERS,usuario)
  }


}
