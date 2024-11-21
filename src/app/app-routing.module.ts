import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IsesionComponent } from './isesion/isesion.component';
import { FormComponent } from './form/form.component';
import { SolicitudProductoComponent } from './solicitud-producto/solicitud-producto.component';
import { RestaurarContrasenaComponent } from './restaurar-contrasena/restaurar-contrasena.component';
import { PUsuarioComponent } from './p-usuario/p-usuario.component';
import { PEmpleadoComponent} from './p-empleado/p-empleado.component';
import { CreacionProductoComponent} from './creacion-producto/creacion-producto.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sesion', component: IsesionComponent},
  {path: 'resgitrarse', component: FormComponent},
  {path: 'solicitud', component: SolicitudProductoComponent},
  {path: 'olvidar', component: RestaurarContrasenaComponent },
  {path: 'pagina-p-usuario', component: PUsuarioComponent },
  {path: 'pagina-p-empleado', component: PEmpleadoComponent },
  {path: 'creacion-producto', component: CreacionProductoComponent },
  {path: 'perfil-usuario', component: PerfilUsuarioComponent},
  {path: 'restaurar-contrasena', component: RestaurarContrasenaComponent},

 
  {
    path: 'sesion',
    component: IsesionComponent,
    children: [
      { path: 'olvidar', component: RestaurarContrasenaComponent } // Ruta para 'olvidar'
    ]
  },
  { path: '', redirectTo: '/sesion', pathMatch: 'full' },
  { path: '**', redirectTo: '/sesion' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
