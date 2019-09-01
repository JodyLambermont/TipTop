import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private auth: AuthenticationService, private router: Router) {}
  check(){
    return this.auth.isAuthenticated();
   }

   login(){
    return this.router.navigate(["login"])
   }

   register(){
    return this.router.navigate(["register"])

   }

   logout(){
    return this.auth.logout();
   }
}
