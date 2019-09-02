import { AuthGuardGuard } from './guards/auth-guard.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from './guards/logged-in.guard';

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

  { path: 'fitness', loadChildren: './pages/fitness/fitness.module#FitnessPageModule' },
  { path: 'zumba', loadChildren: './pages/zumba/zumba.module#ZumbaPageModule' },
  { path: 'kinderdans', loadChildren: './pages/kinderdans/kinderdans.module#KinderdansPageModule' },
  { path: 'bodyfit', loadChildren: './pages/bodyfit/bodyfit.module#BodyfitPageModule' },
  { path: 'hip-hop', loadChildren: './pages/hip-hop/hip-hop.module#HipHopPageModule' },
  { path: 'karate', loadChildren: './pages/karate/karate.module#KaratePageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule', canActivate: [LoggedInGuard] },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule', canActivate: [LoggedInGuard]  },
  { path: 'kalender', loadChildren: './pages/kalender/kalender.module#KalenderPageModule', canActivate: [AuthGuardGuard] },
  { path: 'details', loadChildren: './pages/details/details.module#DetailsPageModule', canActivate: [AuthGuardGuard] },
  { path: 'insertlog', loadChildren: './pages/insertlog/insertlog.module#InsertlogPageModule', canActivate: [AuthGuardGuard] }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}