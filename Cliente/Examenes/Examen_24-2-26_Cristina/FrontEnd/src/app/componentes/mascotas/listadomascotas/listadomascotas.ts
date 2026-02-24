import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Mascotas } from '../../interfaces/mascotas';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Mascotasservicio } from '../../servicios/mascotasservicio';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-listadomascotas',
  imports: [MatIconModule],
  templateUrl: './listadomascotas.html',
  styleUrl: './listadomascotas.css',
})
export class Listadomascotas {
  private mascotasService = inject(Mascotasservicio); // Inyectamos el servicio MascotaServices para poder utilizar sus métodos y obtener la lista de Mascotas, así como realizar operaciones de edición y eliminación. Esto nos permitirá interactuar con la API para gestionar los Mascotas desde este componente.

  private snackBar = inject(MatSnackBar); // Inyectamos el servicio MatSnackBar para mostrar notificaciones de éxito o error al eliminar un Mascota. Esto mejora la experiencia del Mascota al proporcionar retroalimentación inmediata sobre las acciones realizadas.
  private router = inject(Router); // Inyectamos el servicio Router para poder redirigir al Mascota a la página de creación de un nuevo Mascota cuando haga clic en el botón "Nuevo Mascota"

  dataSource: MatTableDataSource<Mascotas>; // Fuente de datos para la tabla, se inicializa en el constructor
  URL: any;

  constructor() {
    this.dataSource = new MatTableDataSource<Mascotas>([]); // Inicializa la fuente de datos con un array vacío, se llenará con los Mascotas obtenidos del servicio  
  }

  ngOnInit():void{
    this.cargarMascotas();
  }
  cargarMascotas():void{
    this.mascotasService.getMascotas().subscribe({
      next: (mascotas: any) => {
        console.log("cargar mascotas");
        this.dataSource.data = mascotas.data;
         //  Forzar detección de cambios
      },
      error: (error) => {
        console.error('Error al cargar mascotas:', error);
      }
    })
  }
    getMascota(id: string): Observable<Mascotas> {
    return this.http.get<Mascotas>(`${this.URL}/Mascotas/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  addMascota(Mascota: Mascotas): Observable<{ id: string }> {
    return this.http.post<{ id: string }>(`${this.URL}/Mascotas`, Mascota, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updateMascota(Mascota: Mascotas): Observable<{ message: string }> {
    return this.http.put<{ message: string }>(`${this.URL}/Mascotas/${Mascota.id}`, Mascota, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  //deleteMascota(id: string): Observable<Mascota> {
  deleteMascota(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.URL}/Mascotas/${id}`, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

    private handleError(error: HttpErrorResponse) {
    console.log(error);

    const errorMessage = error.error?.message || 'Error desconocido al procesar la solicitud';

    return throwError(() => new Error(errorMessage));
  }

}
