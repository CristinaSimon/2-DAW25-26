import { Component } from '@angular/core';

@Component({
  selector: 'app-swichcom',
  imports: [],
  templateUrl: './swichcom.html',
  styles: ``,
})
export class Swichcom {
public tipoAlerta:string="primary";

cambiarAlerta(clase:string):void{
  this.tipoAlerta=clase; 
}
}
