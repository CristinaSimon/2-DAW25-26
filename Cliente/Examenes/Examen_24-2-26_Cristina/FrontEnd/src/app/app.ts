import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Head } from './componentes/head/head';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  Head],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}