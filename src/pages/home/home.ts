import { Component } from '@angular/core';
import { NavController, Loading, LoadingController, AlertController } from 'ionic-angular';

import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { RegisterPage } from "../register/register";
import { SearchPage } from "../search/search";
import { CampListPage } from "../camp-list/camp-list";

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
  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'OPTIONS',
      message: 'Make Your Choice?',
      buttons: [
        {
          text: 'Register',
          handler: () => {
            this.navCtrl.setRoot(RegisterPage);
          }
        },
        {
          text: 'Search',
          handler: () => {
            this.navCtrl.setRoot(CampListPage);
          }
        }
      ]
    });
    confirm.present();
  }
 
  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {  
        this.showConfirm()     
        // this.navCtrl.setRoot(SearchPage);
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
