import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tarea';

@Component({
  selector: 'app-tarea-form',
  templateUrl: './tarea-form.component.html',
  styleUrls: ['./tarea-form.component.css']
})
export class TareaFormComponent {
  tarea: Tarea = {
    id: 100,
    nombre: 'Tarea de prueba',
    descripcion: 'Descripción de prueba',
    terminada: true
  };
}
