import { Component, computed, effect, inject, signal } from '@angular/core';
import { ClasesService } from '../../../core/services/clases.service'; 
import { Clase } from '../../../core/models/clase.model';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-listado-clases',
  standalone: true,
  imports: [DatePipe, FormsModule, RouterLinkWithHref],
  templateUrl: './listado-clases.component.html',
  styleUrl: './listado-clases.component.css'
})
export class ListadoClasesComponent {

  private clasesService = inject(ClasesService);

  filtroUbicacion = signal('');
  filtroTipo = signal('');
  filtroFecha = signal('');

  clasesResource = rxResource({
    loader: () => this.clasesService.getClases()
  })

  // Computed para lista filtrada
  clasesFiltradas = computed(() => {
    const clases = this.clasesResource.value() ?? [];

    return clases.filter(c => {
      const coincideUbicacion = this.filtroUbicacion()
        ? c.ubicacion === this.filtroUbicacion()
        : true;

      const coincideTipo = this.filtroTipo()
        ? c.tipo === this.filtroTipo()
        : true;

      const coincideFecha = this.filtroFecha()
        ? c.horario.startsWith(this.filtroFecha())
        : true;

      return coincideUbicacion && coincideTipo && coincideFecha;
    });
  });

  ubicaciones = computed(() => {
    const clases = this.clasesResource.value() ?? [];
    return [...new Set(clases.map(c => c.ubicacion))];
  });

  tipos = computed(() => {
    const clases = this.clasesResource.value() ?? [];
    return [...new Set(clases.map(c => c.tipo))];
  });

  limpiarFiltros() {
    this.filtroUbicacion.set('');
    this.filtroTipo.set('');
    this.filtroFecha.set('');
  }

}
