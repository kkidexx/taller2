import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path:"home", component:HomeComponent},
    {path: "login", component:LoginComponent},
    {path:"nosotros", component:NosotrosComponent},
    {path: "productos", component:ProductosComponent},


];
