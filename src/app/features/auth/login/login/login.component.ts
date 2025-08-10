import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private authService = inject(AuthService);
  private router = inject(Router);
  username = '';
  password = '';
  error = '';

  login(){
    this.authService.login(this.username, this.password).subscribe(succes => {
      if(succes){
        this.router.navigate(['/clases']);
      }else{
        this.error = 'Datos incorrectos'
      }
    })
  }
}
