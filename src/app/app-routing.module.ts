import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsuarioActivoGuard } from './guard/usuario-activo.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'; 

const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent,
    canActivate:[ UsuarioActivoGuard]
  }, 
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  }, 
  {
    path:'login',
    component: LoginComponent
  } ,   
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
