import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./componentes/home/home').then(c => c.Home) },
    { path: 'home', loadComponent: () => import('./componentes/home/home').then(c => c.Home) },
    { path: 'mascotas', loadComponent: () => import('./componentes/mascotas/listadomascotas/listadomascotas').then(c => c.Listadomascotas) },

    { path: '**', loadComponent: () => import('./componentes/pagina404/pagina404').then(c => c.Pagina404) }

];
