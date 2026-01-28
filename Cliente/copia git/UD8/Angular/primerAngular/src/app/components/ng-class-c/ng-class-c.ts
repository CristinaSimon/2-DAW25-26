import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-ng-class-c',
  imports: [NgClass],
  templateUrl: './ng-class-c.html',
  styles: ``,
})
export class NgClassC {
  public claseAlerta:string="alert alert-success";
  public mensajeAlerta:string="Operación exitosa"

  public cambiarClase(tipoClase:string):void{
    this.claseAlerta=`alert alert-${tipoClase}`;
    this.mensajeAlerta=`Operacion ${tipoClase}`;
  }
}
