import { Component, OnInit } from '@angular/core';
import { ITareasPendientesComponent } from '../i-tareas-pendientes/i-tareas-pendientes.component'
import { ITareasHoyComponent } from '../i-tareas-hoy/i-tareas-hoy.component'
import { ITareasGrupoComponent } from '../i-tareas-grupo/i-tareas-grupo.component'

@Component({
  selector: 't-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
