import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style-c',
  imports: [NgStyle],
  templateUrl: './ng-style-c.html',
  styles: ``,
})
export class NgStyleC {
  //declarar variables para configurar el tamaño
  public fontSize: number = 16;
  public nombreTema: string = "Tema Azul";
  public estilosTemaActual = {
    "background-color": "blue",
    "color": "white",
    "border-radius": "10px",
    "font-weight": "bold"
  }


  aumentarFont(): void {
    this.fontSize += 2;
  }
  public cambiarEstiloAzul(): void {
    this.nombreTema = "Tema Azul"
    this.estilosTemaActual = {
      "background-color": "blue",
      "color": "white",
      "border-radius": "10px",
      "font-weight": "bold"
    }
  }
    public cambiarEstiloRojo(): void {
    this.nombreTema = "Tema Rojo"
    this.estilosTemaActual = {
      "background-color": "red",
      "color": "white",
      "border-radius": "15px",
      "font-weight": "bold"
    }
  }
    public cambiarEstiloVerde(): void {
    this.nombreTema = "Tema Verde"
    this.estilosTemaActual = {
      "background-color": "green",
      "color": "white",
      "border-radius": "15px",
      "font-weight": "bold"
    }
  }


}
