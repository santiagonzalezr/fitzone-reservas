import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private dataUrl = 'mock-users.json';
  usuarioActual = signal<any | null>(null);

  constructor() {
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      this.usuarioActual.set(JSON.parse(usuarioGuardado));
    }
  }

  login(username: string, password: string){
    return this.http.get<any[]>(this.dataUrl).pipe(
      map(usuarios => {
        const usuario = usuarios.find(
          u => u.username === username && u.password === password
        )
        if(usuario){
          this.usuarioActual.set(usuario);
          localStorage.setItem('usuario', JSON.stringify(usuario));
          return true;
        }

        return false;
      })
    )
  }

  logout(){
    this.usuarioActual.set(null);
    localStorage.removeItem('usuario');
  }

  autenticado(){
    return this.usuarioActual() !== null;
  }
}
