import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { environment } from '../../../environments/environments';
import { Estaditica } from '../../interfaz/estaditica';


@Injectable({
  providedIn: 'root',
})
export class Estadisticas {
  private URL = environment.apiUrl;
  private token = sessionStorage.getItem('authToken');

  private httpOptions = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    }),
  };
  private http = inject(HttpClient);

  getEstadisticas(): Observable<Estadisticas> { // El método getUsuarios devuelve un Observable que emitirá un array de objetos Usuario. Este método se encarga de realizar una petición GET al endpoint correspondiente para obtener la lista de usuarios.  
    return this.http.get<Estadisticas>(`${this.URL}/games/estadisticas`).pipe(
      map(response => response), // Aseguramos que la respuesta se trate como un array de Usuario
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    console.log(error);

    const errorMessage = error.error?.message || 'Error desconocido al procesar la solicitud';

    return throwError(() => new Error(errorMessage));
  }


}
