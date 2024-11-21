import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './p-usuario.component.html',
  styleUrls: ['./p-usuario.component.css']
})
export class PUsuarioComponent {
  username: string = 'Usuario'; 

  constructor() {}

  logout() {
    
    alert('Sesión cerrada');

  }
}
