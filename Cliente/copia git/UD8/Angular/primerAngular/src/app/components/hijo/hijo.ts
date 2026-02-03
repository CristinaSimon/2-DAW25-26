import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class Hijo {
public volumen=input.required<number>();
public nombre=input<string>("Control default");

// envio de datos del hijo al padre
public volumenCambiado=output<number>()
bajarVolumen():void{
    this.volumenCambiado.emit(Math.max(this.volumen()-10,0));//envia al padre

}
subirVolumen():void{
  this.volumenCambiado.emit(Math.min(this.volumen()+10,100));//envia al padre

}
muterarVolumen():void{
  this.volumenCambiado.emit(0);//envia al padre
}
maxVolumen():void{
  this.volumenCambiado.emit(100);//envia al padre
}
}
