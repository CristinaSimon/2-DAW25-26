import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

//internacionalización
import { LOCALE_ID } from '@angular/core'; //constante utilizada para especificar el idioma y la configuración regional

//configuración española
import { registerLocaleData } from '@angular/common'; //función  que se usa pra registrar los datos locales
import localeEs from '@angular/common/locales/es'; //Este archivo contiene la información necesaria para trabajar con la localización en español.

registerLocaleData(localeEs, 'es');
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withFetch()), // Proporciona el servicio HttpClient para realizar solicitudes HTTP
    {provide:LOCALE_ID, useValue:'es'}
  ]};
