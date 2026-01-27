import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Head } from "./components/head/head";
import { Body } from "./components/body/body";
import { Footer } from "./components/footer/footer";
import { Iforcom } from './components/iforcom/iforcom';

@Component({
  selector: 'app-root',
  imports: [Head, Footer, Iforcom],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('primerAngular');
}
