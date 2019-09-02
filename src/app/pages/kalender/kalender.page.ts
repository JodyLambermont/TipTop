import { WorkoutlogService } from './../../workoutlog.service';
import { Component, OnInit, ViewChild, LOCALE_ID, Inject } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router } from '@angular/router';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';

/*gebruikte bronnen voor calendar

Voornamelijk de eerste link gebruikt
https://www.youtube.com/watch?v=uWhfwhN5IZc - How to Build an Ionic 4 Calendar App (door Simon Grimm)
https://www.npmjs.com/package/ion2-calendar - npm package met uitleg
https://www.youtube.com/watch?v=GOPEV3sE36o - How to build an Ionic Calendar App (door Simon Grimm)
https://www.youtube.com/watch?v=UVOV2hTkkvE - Ionic 2 Calendar with events

*/

@Component({
  selector: 'app-kalender',
  templateUrl: './kalender.page.html',
  styleUrls: ['./kalender.page.scss'],
})

export class KalenderPage implements OnInit {
  event = {
    title:'',
    startTime:'',
    endTime:'',
    allDay:false
  };

  minDate = new Date().toISOString();

  protected eventSource = [];
  calendar = {
    mode:'month',
    currentDate:new Date()
  }

  viewTitle = '';

  @ViewChild(CalendarComponent, {static: false}) myCal:CalendarComponent;
  constructor(private auth: AuthenticationService, 
    private router: Router, 
    private alertCtrl: AlertController, 
    @Inject(LOCALE_ID) private locale: string, 
    private workoutlogService: WorkoutlogService
    ) { }

    ionViewWillEnter(){
      this.workoutlogService.getAllOfUser((data)=>{
      this.eventSource = []
      for(var i = 0; i < data.length; i++){
      let eventCopy = {
       title:data[i]['description'],
       startTime:new Date(data[i]['start']),
       endTime:new Date(data[i]['stop']),
       allDay:false
      }
      this.eventSource.push(eventCopy);
     }
     this.myCal.loadEvents();
     this.resetEvent();
    });
  }

  ngOnInit() {
    this.resetEvent();
  }  

  resetEvent(){
    this.event = {
      title:'',
      startTime:new Date().toISOString(),
      endTime:new Date().toISOString(),
      allDay:false
    }
  }

  changeMode(mode){
    this.calendar.mode = mode;
}

today(){
  this.calendar.currentDate = new Date();
}

async onEventSelected(event){
  let start = formatDate(event.startTime, 'medium', this.locale);
  let end = formatDate(event.endTime, 'medium', this.locale);

  const alert = await this.alertCtrl.create({
    header: event.title,
    message: 'From: ' + start + '<br><br>To: ' + end,
    buttons: ['OK']
  });
  alert.present();
}

onViewTitleChanged(title){
  this.viewTitle = title;
}

onTimeSelected(ev){
  let selected = new Date(ev.selectedTime);
  this.event.startTime = selected.toISOString();
  selected.setHours(selected.getHours() + 1);
  this.event.endTime = (selected.toISOString());
}


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