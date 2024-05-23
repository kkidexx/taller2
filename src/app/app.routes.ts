import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { LoginComponent } from './pages/login/login.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { CarritoComponent } from './component/carrito/carrito.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "nosotros", component: NosotrosComponent },
    { path: "productos", component: ProductosComponent },
    { path: "contactos", component: ContactosComponent },
    { path: "carrito", component: CarritoComponent },
    { path: 'autor/:idAutor', component: EditarComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }