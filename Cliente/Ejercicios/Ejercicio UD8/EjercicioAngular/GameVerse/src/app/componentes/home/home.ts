import { Component, signal } from '@angular/core';
import { inject } from '@angular/core';

import { Estadisticas } from '../servicios/estadisticas';
import { ServerJuego } from '../servicios/servercrud';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
public estadisticas=signal<Estadisticas|null>(null);
public estadisticasService= inject(Estadisticas);
ngOnInit(){
this.estadisticasService.getEstadisticas()
}

}
