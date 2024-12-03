import { Component,AfterViewInit  } from '@angular/core';
import { Chart } from 'chart.js/auto';


@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrl: './tablero.component.css'
})
export class TableroComponent implements AfterViewInit{

  ngAfterViewInit() {
    this.createEarningsChart();
    this.createRevenueChart();
  }
  
    username: string = 'Empleado'; 
  
    constructor() {}
  
    logout() {
      alert('Sesión cerrada');
    }

  createEarningsChart() {
    new Chart('earningsChart', {  
      type: 'line',
      data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          { 
            label: 'Solicitudes',
            data: [10000, 15000, 20000, 40000, 25000, 40000, 35000, 45000, 40000, 50000, 50000, 80000],
            borderColor: 'blue',
            fill: false
          }
        ]
      }
    });
  }

  createRevenueChart() {
    new Chart('revenueChart', {
      type: 'doughnut',
      data: {
        labels: ['Espera', 'Aceptada', 'Rechazada'],
        datasets: [
          {
            label: 'Solicitud',
            data: [70, 20, 10],
            backgroundColor: ['#007bff', '#28a745', '#dc3545']
          }
        ]
      }
    });
  }
}