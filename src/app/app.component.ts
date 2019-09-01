import { Component } from '@angular/core';

import { Platform, NavController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Fitness',
      url: '/fitness',
      icon: 'fitness'
    },
    {
      title: 'Zumba',
      url: '/zumba',
      icon: 'fitness'
    },
    {
      title: 'Kinderdans',
      url: '/kinderdans',
      icon: 'fitness'
    },
    {
      title: 'Bodyfit',
      url: '/bodyfit',
      icon: 'fitness'
    },
    {
      title: 'Hip-Hop',
      url: '/hip-hop',
      icon: 'fitness'
    },
    {
      title: 'Karate',
      url: '/karate',
      icon: 'fitness'
    },
    {
      title: 'Invoegen Workout',
      url: '/insertlog',
      icon: 'add-circle-outline'
    },
    {
      title: 'Planning',
      url: '/kalender',
      icon: 'calendar'
    },
    {
      title: 'Persoonlijke Details',
      url: '/details',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navController: NavController,
    private menuController: MenuController
  ) {
    this.initializeApp();
  }

  goToPage(page){
    this.navController.navigateForward(page);
    //check here if weird inconsistency accross platforms (desktop(static menu) vs mobile(hamburger menu) for menu controller) 
    this.menuController.close();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
