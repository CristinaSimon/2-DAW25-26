import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { Juego } from '../../interfaz/juego';

import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class ServerJuego {
  private URL = environment.apiUrl;
  private token = sessionStorage.getItem('authToken');

  private httpOptions = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
  };

  private http = inject(HttpClient);

  getJuegos(): Observable<Juego> {
    return this.http.get<Juego>(`${this.URL}/juegos`).pipe(
      map(response => response), // Aseguramos que la respuesta se trate como un objeto Juego
      catchError(this.handleError)
    );
  }


  getJuego(id: number): Observable<Juego> {
    return this.http.get<Juego>(`${this.URL}/juegos/${id}`).pipe(
      map(response => response), // Aseguramos que la respuesta se trate como un objeto Juego
      catchError(this.handleError)
    );
  }

  addJuego(juego: Juego): Observable<{ id: number }> {
    return this.http.post<{ id: number }>(`${this.URL}/juegos`, juego, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updateJuego(juego: Juego): Observable<{ message: string }> {
    return this.http.put<{ message: string }>(`${this.URL}/juegos/${juego.id}`, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  //deleteJuego(id: string): Observable<Juego> {
  deleteJuego(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.URL}/juegos/${id}`, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    const errorMessage = error.error?.message || 'Error desconocido al procesar la solicitud';

    return throwError(() => new Error(errorMessage));
  }

}
