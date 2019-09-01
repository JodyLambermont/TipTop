import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from "../environments/environment";
import { Storage } from "@ionic/storage";



@Injectable({
  providedIn: 'root'
})
export class WorkoutlogService {

  url = environment.url;
  APIKey = environment.APIKey;
  constructor(
    private http: HttpClient,
    private storage: Storage) { }

    async getAllOfUser(success){
      let token = await this.storage.get('access_token')
      var options = new HttpHeaders({
        "Content-Type":"application/json",
        APIKey: this.APIKey,
        "Authorization":"Bearer " + token,
      });
      this.http.get(`${this.url}/api/WorkoutLog/GetAllLogsFromAUser`, { headers: options}).subscribe((data)=>{success(data)
    });
    }

  
    async UpdateLog(logform) {
      logform = JSON.stringify(logform);
      console.log(logform);
      let token = await this.storage.get("access_token");
      var options = new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
        APIkey: this.APIKey
      });
      let request =  this.http
      .post(`${this.url}/api/WorkoutLog/Update`, logform, { headers: options }).subscribe(res=>{console.log(res)},err =>{console.log(err)});
    }

    async DeleteLog(logID) {
      logID = JSON.stringify(logID);
      console.log(logID);
      let token = await this.storage.get("access_token");
      var options = new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
        APIkey: this.APIKey
      });
      let request =  this.http
      .post(`${this.url}/api/WorkoutLog/Delete`, logID, { headers: options }).subscribe(res=>{console.log(res)},err =>{console.log(err)});
    }


  

}

  