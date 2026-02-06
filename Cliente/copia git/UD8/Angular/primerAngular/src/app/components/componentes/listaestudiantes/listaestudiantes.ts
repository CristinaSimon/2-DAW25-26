import { Component } from '@angular/core';
import { Tarjetasestudiantes } from '../tarjetasestudiantes/tarjetasestudiantes';
import { Estudiante } from '../interfaces/estudiante'

@Component({
  selector: 'app-listaestudiantes',
  imports: [Tarjetasestudiantes],
  templateUrl: './listaestudiantes.html',
  styleUrl: './listaestudiantes.css',
})
export class Listaestudiantes {
  public aEstudiantes: Estudiante[]=[
    {id:1, nombre: 'Juan Perez', edad: 20, promedio:8.5}
  ]
}
