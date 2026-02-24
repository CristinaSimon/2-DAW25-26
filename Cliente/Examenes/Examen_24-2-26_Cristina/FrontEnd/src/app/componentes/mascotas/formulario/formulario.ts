import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-formulario',
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatOptionModule, MatSelectModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {

}
