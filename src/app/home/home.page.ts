import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private splashScreen: SplashScreen,
    private statusBar: StatusBar) { }

  ionViewDidEnter() {
    this.statusBar.styleDefault();
    this.splashScreen.hide();
  }
}
