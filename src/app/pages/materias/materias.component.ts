import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-materias',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './materias.component.html'
})
export class MateriasComponent {
  materiasForm: FormGroup;
  materiasDisponibles: string[] = ['Matemáticas', 'Física', 'Programación', 'Historia', 'Inglés'];

  constructor(private fb: FormBuilder) {
    this.materiasForm = this.fb.group({
      codigo: ['', [Validators.required, Validators.minLength(4)]],
      nombre: ['', Validators.required],
      materia: ['', Validators.required],
      semestre: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }

  onSubmit(): void {
    if (this.materiasForm.valid) {
      console.log('Formulario enviado ✅', this.materiasForm.value);
      alert('Inscripción realizada con éxito');
      this.materiasForm.reset();
    } else {
      console.log('Formulario inválido ❌');
    }
  }
}