import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent  {

  constructor( private router: Router, private authService: AuthService) { }

 login() {
  //Ir al backend y confirmar que el usuario exista
  //Se debe de tener un usuario, que estara almanceado en un servicio, para tenerlos en todo momento

  this.authService.login()
  .subscribe ( resp => {
    
    if(resp.id) {
      this.router.navigate(['./heroes']);
    }
  })

 
 }

 

}
