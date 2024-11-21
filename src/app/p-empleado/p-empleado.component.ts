import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './p-empleado.component.html',
  styleUrls: ['./p-empleado.component.css']
})
export class PEmpleadoComponent {
  username: string = 'Empleado'; 

  constructor() {}

  logout() {
    alert('Sesión cerrada');
  }
}
