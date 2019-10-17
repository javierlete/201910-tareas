import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tarea';

@Component({
  selector: 'app-tareas-tabla',
  templateUrl: './tareas-tabla.component.html',
  styleUrls: ['./tareas-tabla.component.css']
})
export class TareasTablaComponent {
  tareas: Tarea[] = [
    { id: 1, nombre: 'Tarea 1', descripcion: 'Descripción 1', terminada: false },
    { id: 2, nombre: 'Tarea 2', descripcion: 'Descripción 2', terminada: true }
  ];

  onBorrar() {
    if (confirm('¿Estás seguro de que quieres borrar este registro?')) {
      alert('Registro borrado');
    } else {
      alert('El registro se conservará');
    }
  }
}
