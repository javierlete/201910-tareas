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

  constructor(private http: HttpClient) { }

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

  getTarea(id: number): Observable<Tarea> {
    return this.http.get<Tarea>(this.url + id).pipe(
      catchError(
        (err, caught) => {
          alert(`Ha habido un error en la petición de la tarea ${id}: ` + err.message);
          console.warn(err);
          console.warn(caught);
          const tarea: Tarea = { id: 0, nombre: '', descripcion: '', terminada: false };
          return of(tarea);
        }
      )
    );
  }

  insertTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(this.url, tarea).pipe(
      catchError(
        (err, caught) => {
          alert(`Ha habido un error en la inserción de la tarea: ` + err.message);
          console.warn(err);
          console.warn(caught);
          return of(tarea);
        }
      )
    );
  }

  updateTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.put<Tarea>(this.url + tarea.id, tarea).pipe(
      catchError(
        (err, caught) => {
          alert(`Ha habido un error en la modificación de la tarea: ` + err.message);
          console.warn(err);
          console.warn(caught);
          return of(tarea);
        }
      )
    );
  }

  patchTarea(id: number, fragmento: any): Observable<any> {
    return this.http.patch<any>(this.url + id, fragmento).pipe(
      catchError(
        (err, caught) => {
          alert(`Ha habido un error en la modificación de la tarea: ` + err.message);
          console.warn(err);
          console.warn(caught);
          fragmento.id = 0;
          return of(fragmento);
        }
      )
    );
  }

  terminadaTarea(id: number, terminada: boolean): Observable<any> {
    return this.patchTarea(id, { terminada });
  }

  deleteTarea(id: number): Observable<any> {
    return this.http.delete(this.url + id).pipe(
      catchError(
        (err, caught) => {
          alert(`Ha habido un error en el borrado de la tarea ${id}: ` + err.message);
          console.warn(err);
          console.warn(caught);
          return of('error');
        }
      )
    );
  }
}
