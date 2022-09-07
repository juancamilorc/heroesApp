import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) //Cuando se entra al auth, carga sus hijos y ese modulo hijo viene de esa direccion, cuando se cargue en memoria entonces va a regresar ese modulo m.AuthModule
    
  },
  {
    path: 'heroes',
    loadChildren: () => import ('./heroes/heroes.module').then(m =>m.HeroesModule),
    canLoad: [ AuthGuard ],
    canActivate: [ AuthGuard]
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
