import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgStyle } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [CommonModule, NgStyle],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  public fecha: Date = new Date();
  public dia = this.fecha.getUTCDay();
  dSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
  public estilo = {
    "background-color": "#e7f3ff",
  }
  public laboral: boolean=true;
  fsemana():void{
    if(this.dia=0){
      this.laboral=false
    }
    if(this.dia=6){
      this.laboral=false
    }
  }
  public mensajelaboral="Hoy es día laboral. El centro está abierto para consultas y adopciones, en horario de 08:00 a 20:00 horas"
  public mensajefinde="Es fin de semana. El centro atiende solo urgencias bajo cita previa"


}
