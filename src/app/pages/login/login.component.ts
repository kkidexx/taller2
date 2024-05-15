import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  servicio = inject(ProductosService)



  email:any;
  password:any;
  token:any;
  mostrarPassword: boolean = false;


   ruta = inject(Router)

  login(formulario:any){
    this.servicio.postUserss(formulario.value).subscribe( p =>{
      this.token= p.accessToken
       if(this.token != ''){ 
      localStorage.setItem("token", 'true')

      



    

      



    }
     }

    )



  }
  alternarVisibilidadPassword() {
    this.mostrarPassword = !this.mostrarPassword;
  }

  

}






