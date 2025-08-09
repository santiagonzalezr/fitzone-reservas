import { Routes } from '@angular/router';
import { ListadoClasesComponent } from './features/clases/listado-clases/listado-clases.component';
import { DetalleClaseComponent } from './features/clases/detalle-clase/detalle-clase.component';

export const routes: Routes = [
    { path: '', redirectTo: 'clases', pathMatch: 'full' },
    { path: 'clases', component: ListadoClasesComponent },
    { path: 'clases/:id', component: DetalleClaseComponent },
    { path: '**', redirectTo: 'clases' }
];
