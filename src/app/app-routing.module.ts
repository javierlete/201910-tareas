import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TareasTablaComponent } from './tareas-tabla/tareas-tabla.component';
import { TareaFormComponent } from './tarea-form/tarea-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/tareas/tabla', pathMatch: 'full' },
  { path: 'tareas/tabla', component: TareasTablaComponent },
  { path: 'tareas/form', component: TareaFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
