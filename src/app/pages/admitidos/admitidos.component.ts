import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admitidos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admitidos.component.html'
})
export class AdmitidosComponent {
  admisionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.admisionForm = this.fb.group({
      nombre: ['', Validators.required],
      lugarNacimiento: ['', Validators.required],
      dni: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      direccion: ['', Validators.required],
      cp: ['', [Validators.required, Validators.pattern('^[0-9]{4,6}$')]],
      ciudad: ['', Validators.required],
      movil: ['', [Validators.required, Validators.pattern('^[0-9]{7,15}$')]],
      fecha: ['', Validators.required],
      firma: ['', Validators.required],
      bloque1: [''],
      bloque2: ['']
    });
  }

  onSubmit(): void {
    if (this.admisionForm.valid) {
      console.log('Formulario enviado ✅', this.admisionForm.value);
      alert('Formulario de admisión enviado con éxito');
      this.admisionForm.reset();
    } else {
      console.log('Formulario inválido ❌');
    }
  }
}