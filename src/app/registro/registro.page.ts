import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterServiceService } from '../services/register-service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage implements OnInit {
  registerForm: FormGroup;
  passwordType: string = 'pasword'
  eye: string = 'Mostrar contraseña'
  

  constructor
(
  //objeto de la autenticacion
  private registerService: RegisterServiceService,
  //objeto del router
  private router: Router,
  //importacion del form builder
  private formBuilder: FormBuilder
) { 

  this.registerForm = this.formBuilder.group({
    user: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
};

  ngOnInit() {
  }



  register(){
    if (this.registerForm.valid){
      const {user, email, password} = this.registerForm.value;

      this.registerService.register(user, email, password).subscribe(
        response => {
          console.log('Response:', response);
        },
        error => {
          console.log('Error:', error);

        }
      )
    }
  }
}