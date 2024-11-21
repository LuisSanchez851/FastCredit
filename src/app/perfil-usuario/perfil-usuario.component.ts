import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrl: './perfil-usuario.component.css'
})
export class PerfilUsuarioComponent {

  usuario = {
    nombre: 'Juan Pérez',
    correo: 'juan.perez@example.com',
    telefono: '123-456-7890',
    direccion: 'Calle Falsa 123, Bogotá, Colombia',
    imagen: 'https://via.placeholder.com/150' // Imagen de ejemplo
  };

}
