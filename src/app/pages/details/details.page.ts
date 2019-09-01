import { Component, OnInit, ViewChild,Inject,LOCALE_ID} from '@angular/core';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { formatDate } from '@angular/common';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { WorkoutlogService } from '../../workoutlog.service';
import {IonInfiniteScroll } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  //@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  log = {
    description: '',
    id: '',
    start: '',
    stop: '',
    userId: ''
  };
  putted: any;

  editForm: FormGroup;
  changed: any;
  changedDesc: any;
  changedSDate: any;
  changedEDate: any;
  changedStart: any;
  changedEnd: any;



  constructor(private alertCtrl: AlertController, @Inject(LOCALE_ID) private locale: string, private workoutlogservice: WorkoutlogService) {
    workoutlogservice.getAllOfUser((data)=>{
      this.putted = data;
      console.log(this.putted);
    });
   }

   async deleteOnClick(put){
    this.workoutlogservice.DeleteLog(put);
   }
   

   async openTodoAlert(put){
   
    let addTodoAlert = await this.alertCtrl.create({
     message: "Enter your log changes:",
     inputs: [{
        type:"text", 
        name:'addDesc',
        placeholder:"Description"
        
      },
      {
       type:"date",
       name:"startDate",
       placeholder:"StartDate"
     },
     {
       type:"date",
       name:"endDate",
       placeholder:"EndDate"
     },{
       type:"time",
       name:'addStart',
       placeholder:"Start Time"
     },{
        type:"time",
        name:"addEnd",
        placeholder:"End Time"
      }],
      buttons: [
        {
          text:"Cancel"
        },{
          text:"Save Changes",
          handler: (alertData) =>{
           this.changedDesc = alertData.addDesc;
           console.log(this.changedDesc);
           this.changedSDate = alertData.startDate;
           this.changedEDate = alertData.endDate;
           this.changedStart = alertData.addStart;
           this.changedEnd = alertData.addEnd;
          //  let editedId = this.putted[0].id;
          console.log(put);
          console.log(this.putted)
          var editedId = put.id;

           console.log(editedId);
 
           var finalStartDate = new Date(this.changedSDate + "T" + this.changedStart + ":00")
           console.log(finalStartDate)
           finalStartDate.toISOString
           console.log(finalStartDate)
           console.log(this.changedSDate)
           console.log(this.changedStart)
           var finalEndDate = new Date(this.changedEDate + "T" + this.changedEnd + ":00")
           console.log(finalEndDate)
           
           
           var changedArray = {
             Id: editedId,
             Start: finalStartDate,
             Stop: finalEndDate,
             Description: this.changedDesc
           }

           put = changedArray;

           
           this.workoutlogservice.UpdateLog(put);
           console.log(changedArray);
         }
        }
      ]
    });
   addTodoAlert.present();
   console.log(this.changedDesc);
  }
 

   loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.putted.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  ngOnInit() {
  }

}
