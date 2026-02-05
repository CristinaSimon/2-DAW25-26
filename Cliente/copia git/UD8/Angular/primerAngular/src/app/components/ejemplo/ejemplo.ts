import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  imports: [CommonModule],
  templateUrl: './ejemplo.html',
  styles: ``,
})
export class Ejemplo {

  aProducts = [
    { id: 1, descripcion: 'ordenador', precio: 1200, categoria: 'electrodoméstico', stock: false },
    { id: 2, descripcion: 'smartphone', precio: 800, categoria: 'electrodoméstico', stock: true },
    { id: 3, descripcion: 'silla de escritorio', precio: 150, categoria: 'muebles', stock: true },
    { id: 4, descripcion: 'mesa de café', precio: 200, categoria: 'muebles', stock: true },
    { id: 5, descripcion: 'auriculares', precio: 100, categoria: 'electrodoméstico', stock: false },
  ];


  isPriceLow(precio: number): boolean {
    return precio < 200;
  }
}