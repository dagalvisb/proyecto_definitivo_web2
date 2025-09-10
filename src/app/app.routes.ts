// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // aqui nos lleva al home
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
  },

  {
    path: 'products',
    loadChildren: () =>
      import('./features/products/products.routes').then(m => m.PRODUCTS_ROUTES),
  },
  // ESTA ES LA RUTA QUE NOS LLEVA A LAS MATRICULAS
  {
    path: 'matriculas',
    loadChildren: () =>
      import('./pages/matriculas/matriculas.routes').then(m => m.MATRICULAS_ROUTES),
  },
  // ESTA ES LA RUTA QUE NOS LLEVA A LOS ADMITIDOS
  {
    path: 'admitidos',
    loadChildren: () =>
      import('./pages/admitidos/admitidos.routes').then(m => m.ADMITIDOS_ROUTES),
  },
  // ESTA ES LA RUTA QUE NOS LLEVA A LAS MATERIAS
  {
    path: 'materias',
    loadChildren: () =>
      import('./pages/materias/materias.routes').then(m => m.MATERIAS_ROUTES),
  },

  {
    path: 'admin',
    canMatch: [() => import('./services/admin.guard').then(g => g.adminOnlyGuard)],
    loadChildren: () =>
      import('./features/admin/admin.routes').then(m => m.ADMIN_ROUTES),
  },

  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent),
  },
];
