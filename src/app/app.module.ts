import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { CreacionProductoComponent } from './creacion-producto/creacion-producto.component';
import { SolicitudProductoComponent } from './solicitud-producto/solicitud-producto.component';
import { IsesionComponent } from './isesion/isesion.component';
import { RestaurarContrasenaComponent } from './restaurar-contrasena/restaurar-contrasena.component';
import { PUsuarioComponent } from './p-usuario/p-usuario.component';
import { PEmpleadoComponent } from './p-empleado/p-empleado.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { PerfilEmpleadoComponent } from './perfil-empleado/perfil-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    CreacionProductoComponent,
    SolicitudProductoComponent,
    IsesionComponent,
    RestaurarContrasenaComponent,
    PUsuarioComponent,
    PEmpleadoComponent,
    PerfilUsuarioComponent,
    PerfilEmpleadoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
