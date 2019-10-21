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
    this.cargarTareas();
  }

  private cargarTareas() {
    this.tareaService.getTareas().subscribe(tareasRecibidas => this.tareas = tareasRecibidas);
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

  onTerminada(id: number, terminada: boolean) {
    this.tareaService.terminadaTarea(id, terminada).subscribe(
      fragmento => {
        if (fragmento.id !== 0) {
          const tarea: Tarea = this.tareas.find(t => t.id === id);
          console.log(tarea);
          tarea.terminada = !tarea.terminada;
          console.log(tarea);
          console.log(this.tareas);
        } else {
          this.cargarTareas();
        }
      }
    );
  }
}
