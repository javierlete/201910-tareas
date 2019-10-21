import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tarea';
import { TareaService } from '../tarea.service';

@Component({
  selector: 'app-tareas-tabla',
  templateUrl: './tareas-tabla.component.html',
  styleUrls: ['./tareas-tabla.component.css']
})
export class TareasTablaComponent implements OnInit {
  tareas: Tarea[];

  constructor(private tareaService: TareaService) { }

  ngOnInit(): void {
    this.tareaService.getTareas().subscribe(
      tareasRecibidas => this.tareas = tareasRecibidas
    );
  }

  onBorrar(id: number) {
    if (confirm('¿Estás seguro de que quieres borrar este registro?')) {
      this.tareaService.deleteTarea(id).subscribe(
        (dato) => {
          if (dato === 'error') {
            alert('No se ha podido borrar');
            return;
          }

          this.tareas = this.tareas.filter(tarea => tarea.id !== id);
          alert('Borrado');
        }
      );
    } else {
      alert('El registro se conservará');
    }
  }
}
