import { LoggedInGuard } from './guards/logged-in.guard';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'fitness', loadChildren: './pages/fitness/fitness.module#FitnessPageModule' },
  { path: 'zumba', loadChildren: './pages/zumba/zumba.module#ZumbaPageModule' },
  { path: 'kinderdans', loadChildren: './pages/kinderdans/kinderdans.module#KinderdansPageModule' },
  { path: 'bodyfit', loadChildren: './pages/bodyfit/bodyfit.module#BodyfitPageModule' },
  { path: 'hip-hop', loadChildren: './pages/hip-hop/hip-hop.module#HipHopPageModule' },
  { path: 'karate', loadChildren: './pages/karate/karate.module#KaratePageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule', canActivate: [LoggedInGuard] },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule', canActivate: [LoggedInGuard] },
  { path: 'kalender', loadChildren: './pages/kalender/kalender.module#KalenderPageModule' },
  { path: 'details', loadChildren: './pages/details/details.module#DetailsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
