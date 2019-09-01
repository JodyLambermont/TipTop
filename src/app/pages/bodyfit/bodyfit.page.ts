import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bodyfit',
  templateUrl: './bodyfit.page.html',
  styleUrls: ['./bodyfit.page.scss'],
})
export class BodyfitPage implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router) { }

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
  ngOnInit() {
  }

}
