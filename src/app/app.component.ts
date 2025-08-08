import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClasesService } from './core/services/clases.service';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fitzone-reservas';
  private clasesService = inject(ClasesService);

  ngOnInit(){
    this.clasesService.getClases().subscribe({
      next: (clases) => {
        console.log(clases);
      },
      error: (error) => {
        console.log('Error:', error);
      }
    })
  }
}
