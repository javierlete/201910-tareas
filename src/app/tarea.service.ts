import { Injectable } from '@angular/core';
import { Tarea } from './tarea';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  url = 'http://localhost:3000/tareas/';
  tareas: Tarea[];

  constructor(private http: HttpClient) {}

  getTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.url).pipe(
      catchError(
        (err, caught) => {
          alert('Ha habido un error en la conexión a las tareas: ' + err.message);
          console.warn(err);
          console.warn(caught);
          return of([]);
        }
      )
    );
  }

  deleteTarea(id: number): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
