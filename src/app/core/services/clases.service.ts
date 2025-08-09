import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Clase } from '../models/clase.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  private http = inject(HttpClient);
  private dataUrl = 'mock-data.json';

  constructor() { }

  /**
   * Devuelve la lista de clases desde el mock
   */
  getClases(){
    return this.http.get<{ clases: Clase[] }>(this.dataUrl).pipe(
      map(data => data.clases)
    );
  }

  getUbicaciones(){
    return this.getClases().pipe(
      map(clases => [...new Set(clases.map(c => c.ubicacion))])
    );
  }

  getTipos(){
    return this.getClases().pipe(
      map(clases => [...new Set(clases.map(c => c.tipo))])
    );
  }

  getHorarios(){
    return this.getClases().pipe(
      map(clases => [...new Set(clases.map(h => h.horario))])
    )
  }
}
