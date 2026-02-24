import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Mascotas } from '../interfaces/mascotas';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Mascotasservicio {
    private URL = environment.apiUrl;
  private token = sessionStorage.getItem('authToken');

  private httpOptions = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
  };

  private http = inject(HttpClient);

    getMascotas(): Observable<Mascotas[]> { // El método getMascotas devuelve un Observable que emitirá un array de objetos Usuario. Este método se encarga de realizar una petición GET al endpoint correspondiente para obtener la lista de Mascotas.  
    return this.http.get<Mascotas[]>(`${this.URL}`).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    console.log(error);

    const errorMessage = error.error?.message || 'Error desconocido al procesar la solicitud';

    return throwError(() => new Error(errorMessage));
  }

}
