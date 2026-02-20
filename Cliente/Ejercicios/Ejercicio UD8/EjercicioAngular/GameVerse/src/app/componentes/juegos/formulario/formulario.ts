
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ActivatedRoute, Router } from '@angular/router';
import { Juego } from '../../../interfaz/juego'
import { ServerJuego } from '../../servicios/servercrud';

@Component({
  selector: 'app-formulario',
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule, MatOptionModule, MatSelectModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  public userForm!: FormGroup;

  // Inyectamos el servicio Router para poder redirigir al usuario a la página de creación de un nuevo usuario cuando haga clic en el botón "Nuevo Usuario"
  private router = inject(Router); // Inyectamos el servicio Router para poder redirigir al usuario a la página de creación de un nuevo usuario cuando haga clic en el botón "Nuevo Usuario"
  private juegoService = inject(ServerJuego); // Inyectamos el servicio ServerJuego para poder utilizar sus métodos y gestionar los usuarios desde este componente, como crear, actualizar o eliminar usuarios. 
  private snackBar = inject(MatSnackBar); // Inyectamos el servicio MatSnackBar para mostrar notificaciones de éxito o error al crear o actualizar un usuario. Esto mejora la experiencia del usuario al proporcionar retroalimentación inmediata sobre las acciones realizadas.
  private activatedRoute = inject(ActivatedRoute); // Inyectamos el servicio ActivatedRoute para poder obtener los parámetros de la URL
  private id!: number;


  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      id: [''], // Campo para el ID del usuario, se puede usar para editar un usuario existente 
      titulo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      genero: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      plataforma: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      año: ['', [Validators.required]],
      precio: ['', [Validators.required], Validators.minLength(3), Validators.maxLength(50)],
      rating: ['', [Validators.required], Validators.minLength(1), Validators.maxLength(50)],
      desarrollador: ['', [Validators.required], Validators.minLength(3), Validators.maxLength(50)],
      descripcion: ['', [Validators.required], Validators.minLength(10), Validators.maxLength(150)],
      estado: [true, [Validators.required]],
      imagen: [''],
    
    });
  }

  ngOnInit(): void {
    
    //extraer parámetros de la URL
    this.activatedRoute.queryParams.subscribe(params => { // Suscribimos a los cambios en los parámetros de la ruta para obtener el ID del usuario que queremos editar, si es que se proporciona. Esto nos permite cargar los datos del usuario en el formulario para su edición. Si no se proporciona un ID, asumimos que estamos creando un nuevo usuario.
      this.id = params['id'];// Asignamos el valor del ID extraído de la URL a la variable id del componente para su uso posterior, como cargar los datos del usuario o actualizarlo.
      console.log(this.id);
      if (this.id) { //

        this.juegoService.getJuego(this.id).subscribe({ //
          next: (response: any) => { // Si la petición para obtener los datos del usuario es exitosa, se ejecuta esta función. Aquí puedes cargar los datos del usuario en el formulario para que el usuario pueda editarlos. Por ejemplo, puedes usar this.userForm.patchValue(response) para llenar el formulario con los datos del usuario obtenido de la API.
            // Cargar los datos del usuario en el formulario para su edición
            this.userForm.controls['id'].setValue(response.data.id);
            this.userForm.controls['titulo'].setValue(response.data.titulo);
            this.userForm.controls['genero'].setValue(response.data.genero);
            this.userForm.controls['plataforma'].setValue(response.data.plataforma);
            this.userForm.controls['anio'].setValue(response.data.anio);
            this.userForm.controls['precio'].setValue(response.data.precio);
            this.userForm.controls['rating'].setValue(response.data.rating);
            this.userForm.controls['desarrollador'].setValue(response.data.desarrollador);
            this.userForm.controls['descripcion'].setValue(response.data.descripcion);
            this.userForm.controls['estado'].setValue(response.data.estado);
            this.userForm.controls['imagen'].setValue(response.data.imagen);
          }
        })
      }
    })
  }

  /**getter's */
  get titulo() {
    return this.userForm.get('name') as FormControl; // as FormControl es para evitar la ?
  }
  get genero() {
    return this.userForm.get('genero') as FormControl; // as FormControl es para evitar la ?
  }
  get plataforma() {
    return this.userForm.get('plataforma') as FormControl; // as FormControl es para evitar la ?
  }
  get anio() {
    return this.userForm.get('anio') as FormControl; // as FormControl es para evitar la ?
  }
  get precio() {
    return this.userForm.get('precio') as FormControl; // as FormControl es para evitar la ?
  }
  get rating() {
    return this.userForm.get('rating') as FormControl; // as FormControl es para evitar la ?
  }
  get desarrollador() {
    return this.userForm.get('desarrollador') as FormControl; // as FormControl es para evitar la ?
  }
  get descripcion() {
    return this.userForm.get('descripcion') as FormControl; // as FormControl es para evitar la ?
  }
  get estado() {
    return this.userForm.get('estado') as FormControl; // as FormControl es para evitar la ?
  }
  get imagen() {
    return this.userForm.get('imagen') as FormControl; // as FormControl es para evitar la ?
  }




  onSubmit(): void {
    const juego: Juego = {
      id: this.userForm.value.id, // El ID se asigna solo si estamos editando un usuario existente, para crear un nuevo usuario el ID se generará automáticamente en el backend.
      titulo: this.userForm.value.titulo,
      genero: this.userForm.value.genero,
      plataforma: this.userForm.value.plataforma,
      anio: this.userForm.value.anio,
      precio: this.userForm.value.precio,
      rating: this.userForm.value.rating,
      desarrollador: this.userForm.value.desarrollador,
      descripcion: this.userForm.value.descripcion,
      estado: this.userForm.value.estado,
      imagen: this.userForm.value.imagen,
    };

    if (!this.id) { // Si no hay un ID en la URL, significa que estamos creando un nuevo usuario, por lo que llamamos al método anadirUsuario. Si hay un ID, significa que estamos editando un usuario existente, por lo que llamamos al método actualizarUsuario.
      console.log('añadir');
      this.anadirJuego(juego)
    } else {
      console.log('actualizar');
      this.actualizarJuego(juego)
    }
    this.userForm.reset();
    this.router.navigate(['/crud'], {
  
});
  }

  anadirJuego(juego:Juego): void {
    console.log(this.userForm.value);
    this.juegoService.addJuego(juego).subscribe({
      next: (response) => {
        // Mostrar también  snackbar
        this.snackBar.open('Juego creado correctamente', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: ['snack-success']
        });
       
      },
      error: (error) => {
        console.error('Error al crear Juego:', error);
      }
    });
  }

  actualizarJuego(juego: Juego): void {
     console.log(juego);
    this.juegoService.updateJuego(juego).subscribe({
      next: (response) => {
        // Mostrar también  snackbar
        this.snackBar.open('Juego actualizado correctamente', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: ['snack-success']
        });
      
      },
      error: (error) => {
        console.error('Error al actualizar usuario:', error);
      }
    });

  }

  onReset(): void {
    this.userForm.reset();
  }

}



