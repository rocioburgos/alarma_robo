import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot  } from '@angular/router';
 
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioActivoGuard implements CanActivate {
  constructor(private route:Router, private authSrv:AuthService){
  }


 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if( this.authSrv.getCurrentUserLS() == null){  
         this.route.navigate(['login']);
        return false; 
      }else{
        return true;
      } 
  }

}
