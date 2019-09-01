import { Injectable } from "@angular/core";
import { Platform, AlertController, ToastController } from "@ionic/angular";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Storage } from "@ionic/storage";
import { BehaviorSubject } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { environment } from "../environments/environment";
import { Router } from '@angular/router';

// JWT retrieved from local storage
const TOKEN_KEY = "access_token";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url = environment.url;
  APIKey = environment.APIKey;
  user = null;
  authenticationState = new BehaviorSubject(false);

  constructor(
    private http: HttpClient,
    private helper: JwtHelperService,
    private storage: Storage,
    private plt: Platform,
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router
  ) { 
      this.plt.ready().then(()=>{
        this.checkToken();
      })
  }

  // checking state of token
  checkToken() {
    this.storage.get(TOKEN_KEY).then(token => {
      if (token) {
        let decoded = this.helper.decodeToken(token);
        let isExpired = this.helper.isTokenExpired(token);

        if (!isExpired) {
          this.user = decoded;
          this.authenticationState.next(true);
        } else {
          this.storage.remove(TOKEN_KEY);
        }
      }
    });
  }

  register(credentials){
    credentials = JSON.stringify(credentials);
    var options = new HttpHeaders({
      "Content-Type": "application/json",
      APIkey: this.APIKey
    });
    return this.http
    .post(`${this.url}/api/Auth/Register`, credentials, { headers: options })
    .pipe(
      tap(res => {
        this.router.navigate(["login"])
      }
      ),
      catchError(e => {
        this.presentToast1();
        //this.showAlert(e.error.message);
        throw new Error(e);
      })
    );
  }

    login(credentials) {
    credentials = JSON.stringify(credentials);
    //console.log(credentials);
    var options = new HttpHeaders({
      "Content-Type": "application/json",
      APIkey: this.APIKey
    });
    return this.http
      .post(`${this.url}/api/Auth/Login`, credentials, { headers: options })
      .pipe(
        tap(async res => {
          //console.log(res);
          await this.storage.set(TOKEN_KEY, res["token"]);
          //console.log(this.storage.get("access_token"));
          this.user = this.helper.decodeToken(res["token"]); // stores user data (here email and userid)
          //console.log(this.user);
          this.authenticationState.next(true);
          //console.log(this.authenticationState.value);
          this.router.navigate([""]);
        }),
        catchError(e => {
          this.presentToast();
          //this.showAlert(e.error.message);
          throw new Error(e);
        })
      );
  }

  logout() {
    this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false),
      this.router.navigate([""])
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }
  
  //error message onvolledig?
  showAlert(msg) {
    let alert = this.alertController.create({
      message: msg,
      header: "Error",
      buttons: ["OK"]
    });
    alert.then(alert => alert.present());
  }

  async presentToast1(){
    const toast = await this.toastController.create({
      message: "Gebruiker bestaat al!",
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

  async presentToast(){
    const toast = await this.toastController.create({
      message: "Foutieve gegevens",
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

}
