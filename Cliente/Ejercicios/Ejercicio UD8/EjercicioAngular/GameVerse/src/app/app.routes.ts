import { Routes } from '@angular/router';
import { Home } from './componentes/home/home';
import { Juegos } from './componentes/juegos/juegos';

export const routes: Routes = [
    {path: '',loadComponent: () =>import ('./componentes/home/home').then(c=>Home)},
    {path: 'home',loadComponent: () =>import ('./componentes/home/home').then(c=>Home)},
    {path: 'juegos',loadComponent: () =>import ('./componentes/juegos/juegos').then(c=>Juegos)},

];