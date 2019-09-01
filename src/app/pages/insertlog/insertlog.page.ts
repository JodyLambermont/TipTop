import { Component, OnInit, ViewChild, Inject,LOCALE_ID } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastController } from "@ionic/angular";
import { Observable } from 'rxjs';
import { WorkoutlogService } from '../../workoutlog.service';



@Component({
  selector: 'app-insertlog',
  templateUrl: './insertlog.page.html',
  styleUrls: ['./insertlog.page.scss'],
})
export class InsertlogPage implements OnInit {
  logForm: FormGroup;
  allData: any;
  constructor(
    public toastController: ToastController,
    private formBuilder: FormBuilder,
    private workoutlogservice: WorkoutlogService,
    @Inject(LOCALE_ID) private locale: string
    )
    { }

  //validators from the form (html has button disabled until all valid)
  ngOnInit() {
    this.logForm = this.formBuilder.group({
      Start: ["", [Validators.required]],
      Stop: ["", [Validators.required]],
      Description: ["", [Validators.required]]
    });
  }
  
  
  //submit data from reactive form with api call
  logSubmit(){
    this.workoutlogservice.CreateLog(this.logForm.value);
    this.presentToast();
  }
  
  
  //Makes a popup when sent, no button required to close popup, will automatically close after duration : x (2000 = 2 sec)
  async presentToast() {
    const toast = await this.toastController.create({
      message: "Succesvol toegevoegd!",
      duration: 2000
    });
    toast.present();
  }

}
