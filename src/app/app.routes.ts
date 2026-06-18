import { Routes } from '@angular/router';
import { authGuard } from '../app/guards/auth-guard'

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./login/login')
        .then(m => m.Login)
  },

  {
    path: 'registro',
    loadComponent: () =>
      import('./registro/registro')
        .then(m => m.Registro)
  },

  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./dashboard/dashboard')
        .then(m => m.Dashboard)
  },

  {
    path: 'entrada',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./iniciar-estacionamiento/iniciar-estacionamiento')
        .then(m => m.IniciarEstacionamiento)
  },

  {
    path: 'salida',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./finalizar-estacionamiento/finalizar-estacionamiento')
        .then(m => m.FinalizarEstacionamiento)
  },

  {
    path: 'historial',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./historial/historial')
        .then(m => m.Historial)
  },

  {
    path: '**',
    redirectTo: 'login'
  }

];