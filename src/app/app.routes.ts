import { Routes } from '@angular/router';

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
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard')
        .then(m => m.Dashboard)
  },
  {
    path: 'entrada',
    loadComponent: () =>
      import('./iniciar-estacionamiento/iniciar-estacionamiento')
        .then(m => m.IniciarEstacionamiento)
  },
  {
    path: 'salida',
    loadComponent: () =>
      import('./finalizar-estacionamiento/finalizar-estacionamiento')
        .then(m => m.FinalizarEstacionamiento)
  },

  {
  path: 'registro',
  loadComponent: () =>
    import('./registro/registro')
      .then(m => m.Registro)
    },
    {
  path: 'historial',
  loadComponent: () =>
    import('./historial/historial')
      .then(m => m.Historial)
}
];