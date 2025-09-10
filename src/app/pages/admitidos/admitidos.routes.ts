import { Routes } from '@angular/router';

export const ADMITIDOS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./admitidos.component').then(c => c.AdmitidosComponent),
  },
];