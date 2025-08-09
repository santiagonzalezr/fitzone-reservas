import { Component, computed, signal } from '@angular/core';
import { Clase } from '../../../../core/models/clase.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-mis-reservas',
  imports: [DatePipe],
  templateUrl: './mis-reservas.component.html',
  styleUrl: './mis-reservas.component.css'
})
export class MisReservasComponent {
  reservas = signal<Clase[]>([]);
  hayReservas = computed(() => this.reservas().length > 0);

  constructor(){
    this.cargarReservas();
  }

  cargarReservas() {
    const data = JSON.parse(localStorage.getItem('reservas') ?? '[]');
    this.reservas.set(data);
  }

  cancelarReserva(id: number) {
    const nuevasReservas = this.reservas().filter(r => r.id !== id);
    this.reservas.set(nuevasReservas);
    localStorage.setItem('reservas', JSON.stringify(nuevasReservas));
  }
}
