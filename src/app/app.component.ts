import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoClasesComponent } from "./features/clases/listado-clases/listado-clases.component";

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ListadoClasesComponent]
})
export class AppComponent {
  title = 'fitzone-reservas';
}
