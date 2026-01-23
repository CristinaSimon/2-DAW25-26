import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Head } from "./components/head/head";
import { Body } from "./components/body/body";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Body, Head, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('primerAngular');
}
