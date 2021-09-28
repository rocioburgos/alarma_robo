import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

 
  email:string;
  clave:string;
  constructor(private authSrv:AuthService, private router:Router) { }

  ngOnInit() {}

  autocompletar(){
    this.email='pepe@gmail.com';
    this.clave='123456';
  }

  ingresar(){
    this.authSrv.loginUser(this.email , this.clave).then(()=> {
    
      localStorage.setItem('usuario_alarma', JSON.stringify ({'email':  this.email,  'sesion':'activa'  }));

      this.router.navigate(['home']);
    }).catch((res)=> console.log(res)); 
  }
}
