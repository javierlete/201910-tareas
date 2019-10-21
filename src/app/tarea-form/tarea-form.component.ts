import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tarea';
import { ActivatedRoute } from '@angular/router';
import { TareaService } from '../tarea.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tarea-form',
  templateUrl: './tarea-form.component.html',
  styleUrls: ['./tarea-form.component.css']
})
export class TareaFormComponent implements OnInit {
  tarea: Tarea = { id: 0, nombre: '', descripcion: '', terminada: false };

  constructor(
    private route: ActivatedRoute,
    private tareaService: TareaService,
    private location: Location) { }

  ngOnInit(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    console.log(id);

    if (id !== 0) {
      this.tareaService.getTarea(id).subscribe(
        tareaRecibida => this.tarea = tareaRecibida
      );
    }
  }

  onAceptar() {
    if (this.tarea.id) {
      this.tareaService.updateTarea(this.tarea).subscribe(
        () => this.location.back()
      );
    } else {
      this.tareaService.insertTarea(this.tarea).subscribe(
        tareaRecibida => {
          console.log(tareaRecibida);

          if (tareaRecibida.id === 0) {
            this.tarea = tareaRecibida;
          } else {
            this.location.back();
          }
        }
      );
      alert('Añadir');
    }
  }
}
