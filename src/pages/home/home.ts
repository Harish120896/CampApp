import { Component } from '@angular/core';
import { NavController, Loading, LoadingController, AlertController } from 'ionic-angular';

import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { RegisterPage } from "../register/register";
import { MainPage } from "../main/main";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loading: Loading;
  registerCredentials = { email: '', password: '' };

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,public alertCtrl: AlertController,public auth: AuthServiceProvider) {

  }

  public createAccount() {
    this.navCtrl.push(RegisterPage);
  }
 
  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {        
        this.navCtrl.setRoot(MainPage);
      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });
  }
  public showLoading(){
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
  public showError(text){
    this.loading.dismiss();
    
       let alert = this.alertCtrl.create({
         title: 'Fail',
         subTitle: text,
         buttons: ['OK']
       });
       alert.present(prompt);
  }

}
