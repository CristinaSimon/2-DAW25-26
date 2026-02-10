import { Component,inject } from '@angular/core';
import { Clientes } from '../../services/clientes';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';


@Component({
  selector: 'app-servicios',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {
 public aClientes=inject(Clientes)
 public router =inject(Router)
 goHome():void{
  this.router.navigateByUrl('/body')
 }
}
