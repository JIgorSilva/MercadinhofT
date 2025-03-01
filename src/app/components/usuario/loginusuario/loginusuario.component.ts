import { Component, inject } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.services';
import { HttpResponse } from '@angular/common/http';
<<<<<<< HEAD
=======
import Swal from 'sweetalert2';
>>>>>>> feat-criação-rotas-editlayout-front-02

@Component({
  selector: 'app-loginusuario',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl:'./loginusuario.component.html',
  styleUrls: ['./loginusuario.component.scss']
})
export class LoginusuarioComponent {
  email!: string
  senha!: string
  authService = inject(AuthService); 
  router = inject(Router);


  loginUsuarioDto() {
    this.authService.login(this.email, this.senha).subscribe({
      next: (response) => {
        Swal.fire({
          title: "Bem vindo ! ",
          icon: "success",
          draggable: true
        });
        
        this.router.navigate(['menu']);
      },
      error: (error) => {
        console.error('Erro no login:', error);
        if (typeof error.error === 'string') {
          const errorObj = JSON.parse(error.error);
          let errorMessage = errorObj.message || 'Erro desconhecido';
          alert('Erro: ' + (JSON.stringify(errorMessage)));
        }
      }      
    });
  }
}
