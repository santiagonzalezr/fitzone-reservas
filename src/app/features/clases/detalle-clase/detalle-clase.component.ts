import { Component, computed, inject, input, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ClasesService } from '../../../core/services/clases.service';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detalle-clase',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './detalle-clase.component.html',
  styleUrl: './detalle-clase.component.css'
})
export class DetalleClaseComponent {
  clasesService = inject(ClasesService)
  route = inject(ActivatedRoute)
  router = inject(Router)
  idClase = signal<string | null>(null);

  clasesResource = rxResource({
    loader: () => this.clasesService.getClases()
  });

  clase = computed(() => {
    const id = this.idClase();
    const clases = this.clasesResource.value() ?? [];
    return clases.find(c => c.id.toString() === id) ?? null;
  });

  constructor(){
    this.idClase.set(this.route.snapshot.paramMap.get('id'));
  }

  volver() {
    this.router.navigate(['/clases']);
  }

  reservar() {
    if (this.clase()) {
      const reservas = JSON.parse(localStorage.getItem('reservas') ?? '[]');
      reservas.push(this.clase());
      localStorage.setItem('reservas', JSON.stringify(reservas));
      //alert('Clase reservada con éxito');

      this.router.navigate(['/reservas']);
    }
  }
}
