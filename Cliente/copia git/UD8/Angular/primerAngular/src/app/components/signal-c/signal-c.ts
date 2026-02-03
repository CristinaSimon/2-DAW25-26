import { CommonModule } from '@angular/common';
import { Component, computed, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [CommonModule],
  templateUrl: './signal-c.html',
  styles: ``,
})


export class SignalC {
  //signa permite guardar un valor y reaccionar automanaticamente cuando cambia
  //Se lee con () y se actualiza con .set o update()
  public contador= signal(0);

  //establecer la reaccion que queremos que tenga cuando cambia de datos el signal contador
  //computed que es un signal que se calcula automaticamente basandose en otros signal

  public doble:Signal<number>=computed(()=>this.contador()*2)
  public triple:Signal<number>=computed(()=>this.contador()*3)
  public par:Signal<number>=computed(()=>this.contador()%2)
  aumentar(): void {
    this.contador.update(valor => valor+1)
  }
  disminuir(): void {
    this.contador.update(valor => valor-1)
  }
  resetear(): void {
    this.contador.set(0);
  }


}
