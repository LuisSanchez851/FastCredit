import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-isesion',
  templateUrl: './isesion.component.html',
  styleUrls: ['./isesion.component.css']
})
export class IsesionComponent {
  username: string = '';
  password: string = '';
  role: string = 'Usuario';

  constructor(private router: Router) {}

  // Método que se llama al seleccionar un rol
  onRoleSelect(role: string) {
    this.role = role; // Cambia el rol seleccionado
    if (this.role === 'Usuario') {
      this.router.navigate(['/pagina-p-usuario']); // Redirige al usuario
    } else if (this.role === 'Empleado') {
      this.router.navigate(['/pagina-p-empleado']); // Redirige al empleado
    }
  }

  // Método de inicio de sesión
  onLogin() {
    if (this.username.trim() && this.password.trim()) {
      alert(`Inicio de sesión correcto: ${this.role}`);
      if (this.role === 'Usuario') {
        this.router.navigate(['/pagina-p-usuario']);
      } else if (this.role === 'Empleado') {
        this.router.navigate(['/pagina-p-empleado']);
      }
    } else {
      alert('Por favor, completa todos los campos');
    }
  }
}
