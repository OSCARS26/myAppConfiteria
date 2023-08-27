import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  formularioRegistro: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formularioRegistro = this.formBuilder.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmacionPassword: ['', Validators.required],
    });
  }

  submit() {
    if (this.formularioRegistro.valid) {
      // Aquí puedes implementar la lógica para guardar el registro
      console.log('Formulario válido. Datos:', this.formularioRegistro.value);
    }
  }
}
