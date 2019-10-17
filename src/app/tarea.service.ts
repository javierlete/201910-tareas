import { Injectable } from '@angular/core';
import { Tarea } from './tarea';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  tareas: Tarea[] = [
    { id: 1, nombre: 'Tarea 1', descripcion: 'Descripción 1', terminada: false },
    { id: 2, nombre: 'Tarea 2', descripcion: 'Descripción 2', terminada: true }
  ];

  getTareas(): Observable<Tarea[]> {
    return of(this.tareas);
  }
}
