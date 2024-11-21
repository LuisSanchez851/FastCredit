import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './creacion-producto.component.html',
  styleUrls: ['./creacion-producto.component.css']
})
export class CreacionProductoComponent {
  // Simulando datos de solicitudes de tarjeta
  solicitudes = [
    { nombre: 'Juan Pérez', tipoTarjeta: 'Clásica', estado: 'Pendiente' },
    { nombre: 'María López', tipoTarjeta: 'Oro', estado: 'Aprobada' },
    { nombre: 'Carlos Díaz', tipoTarjeta: 'Platinum', estado: 'Rechazada' },
    { nombre: 'Laura Gómez', tipoTarjeta: 'Clásica', estado: 'Pendiente' }
  ];

  // Método para cambiar el estado de la solicitud
  cambiarEstado(solicitud: any, nuevoEstado: string) {
    solicitud.estado = nuevoEstado;
  }

  // Método para cerrar sesión
  logout() {
    alert('Sesión cerrada');
  }
}
