import { Component } from '@angular/core';
import { Tarea } from './tarea';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tareas: Tarea[] = [
    { id: 1, nombre: 'Tarea 1', descripcion: 'Descripción 1', terminada: false },
    { id: 2, nombre: 'Tarea 2', descripcion: 'Descripción 2', terminada: true }
  ];
}
