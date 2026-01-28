import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule],
  templateUrl: './pipes.html',
  styles: ``,
})
export class Pipes {
  public nombre:string= 'AnGuLaR';
  public numero:number = 12345.56687;
  public fecha:Date = new Date();
  public porcentaje:number = 0.12;
  public lista:number [] =[2,5,7,9,22,45,33,24];

}
