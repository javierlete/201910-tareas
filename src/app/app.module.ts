import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareasTablaComponent } from './tareas-tabla/tareas-tabla.component';
import { TareaFormComponent } from './tarea-form/tarea-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TareasTablaComponent,
    TareaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
