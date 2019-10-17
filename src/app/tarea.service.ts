import { Injectable } from '@angular/core';
import { Tarea } from './tarea';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  tareas: Tarea[];

  getTareas(): Observable<Tarea[]> {
    return of(this.tareas);
  }
}
