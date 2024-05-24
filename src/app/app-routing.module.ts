import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { authGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home/home-page' },

  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
    //canActivate: [authGuard]
  },
  {
    path: 'components-selector',
    loadChildren: () =>
      import('./pages/components-selector/components-selector.module').then(
        (m) => m.ComponentsSelectorModule
      ),
  },
  {
    path: 'config',
    loadChildren: () =>
      import('./pages/config/config.module').then((m) => m.ConfigModule),
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
