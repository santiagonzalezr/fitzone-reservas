import { Routes } from '@angular/router';
import { DetalleClaseComponent } from './features/clases/detalle-clase/detalle-clase.component';
import { LoginComponent } from './features/auth/login/login/login.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: 'clases',
        canActivate: [authGuard],
        loadComponent: () =>
        import('./features/clases/listado-clases/listado-clases.component').then(m => m.ListadoClasesComponent)
    },
    {
        path: 'reservas',
        canActivate: [authGuard],
        loadComponent: () =>
        import('./features/reservas/mis-reservas/mis-reservas.component').then(m => m.MisReservasComponent)
    },
    { path: 'clases/:id', component: DetalleClaseComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
