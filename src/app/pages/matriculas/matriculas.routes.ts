import { Routes } from '@angular/router';

export const MATRICULAS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./matriculas.component').then(c => c.MatriculasComponent),
  },
];