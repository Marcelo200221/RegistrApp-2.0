import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'selfie',
    redirectTo: 'selfie',
    pathMatch: 'full'
  },
  {
    path: 'clase',
    redirectTo: 'clase',
    pathMatch: 'full'
  },
  {
    path: 'register',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: 'lector-qr',
    redirectTo: 'lector-qr',
    pathMatch: 'full'
  },
  {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'e404',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'lector-qr',
    loadChildren: () => import('./lector-qr/lector-qr.module').then( m => m.LectorQRPageModule)
  },
  {
    path: 'cambio-clave',
    loadChildren: () => import('./cambio-clave/cambio-clave.module').then( m => m.CambioClavePageModule)
  },
  {
    path: 'clase',
    loadChildren: () => import('./clase/clase.module').then( m => m.ClasePageModule)
  },
  {
    path: 'e404',
    loadChildren: () => import('./e404/e404.module').then( m => m.E404PageModule)
  },
  {
    path: 'selfie',
    loadChildren: () => import('./selfie/selfie.module').then( m => m.SelfiePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
