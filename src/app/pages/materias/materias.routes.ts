import { Routes } from '@angular/router';

export const MATERIAS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./materias.component').then(c => c.MateriasComponent),
  },
];