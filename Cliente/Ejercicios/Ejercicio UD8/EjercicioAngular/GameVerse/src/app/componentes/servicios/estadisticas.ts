import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { environment } from '../../../environments/environments';


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
    })

  //     getUsuarios(): Observable<Usuario[]> { // El método getUsuarios devuelve un Observable que emitirá un array de objetos Usuario. Este método se encarga de realizar una petición GET al endpoint correspondiente para obtener la lista de usuarios.  
  //   return this.http.get<Usuario[]>(`${this.URL}/usuarios`).pipe(
  //     map(response => response), // Aseguramos que la respuesta se trate como un array de Usuario
  //     catchError(this.handleError)
  //   );
  // }

  };

}
