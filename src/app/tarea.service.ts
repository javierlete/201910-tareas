import { Injectable } from '@angular/core';
import { Tarea } from './tarea';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  url = 'http://localhost:3000/tareas';
  tareas: Tarea[];

  constructor(private http: HttpClient) {}

  getTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.url);
  }
}
