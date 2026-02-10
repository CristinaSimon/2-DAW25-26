import { Routes } from '@angular/router';
import { Body } from './components/body/body';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./components/body/body').then(c => c.Body) },
    { path: 'body', loadComponent: () => import('./components/body/body').then(c => c.Body) },
    { path: 'dobleblinding', loadComponent: () => import('./components/doblebinding/doblebinding').then(c => c.Doblebinding) },
    { path: 'iffor', loadComponent: () => import('./components/iforcom/iforcom').then(c => c.Iforcom) },
    { path: 'ng-class', loadComponent: () => import('./components/ng-class-c/ng-class-c').then(c => c.NgClassC) },
    { path: 'ng-style', loadComponent: () => import('./components/ng-style-c/ng-style-c').then(c => c.NgStyleC) },
    { path: 'swich', loadComponent: () => import('./components/swichcom/swichcom').then(c => c.Swichcom) },
    { path: 'pipes', loadComponent: () => import('./components/pipes/pipes').then(c => c.Pipes) },
    { path: 'signal', loadComponent: () => import('./components/signal-c/signal-c').then(c => c.SignalC) },
    { path: 'padre', loadComponent: () => import('./components/padre/padre').then(c => c.Padre) },
    { path: 'ejemplo', loadComponent: () => import('./components/ejemplo/ejemplo').then(c => c.Ejemplo) },
    { path: 'estudiantes', loadComponent: () => import('./components/componentes/listaestudiantes/listaestudiantes').then(c => c.Listaestudiantes) },
    { path: 'servicios', loadComponent: () => import('./components/servicios/servicios').then(c => c.Servicios) },
    { path: 'login', loadComponent: () => import('./componets/usuarios/login/login').then(c => c.Login) },
    { path: 'login', loadComponent: () => import('./componets/usuarios/crud/crud').then(c => c.Crud) },
    { path: 'login', loadComponent: () => import('./componets/usuarios/formulario/formulario').then(c => c.Formulario) },

    { path: '**', loadComponent: () => import('./components/pagina404/pagina404').then(c => c.Pagina404) }
];