import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { SearchPage } from "../search/search";
import { CampListPage } from "../camp-list/camp-list";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  registerCredentials = {email:"",password:""};
  createSuccess:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public auth: AuthServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  public register() {
    this.auth.register(this.registerCredentials).subscribe(success => {
      if (success) {
        this.createSuccess = true;
        this.showPopup("Success", "Account created.");
      } else {
        this.showPopup("Error", "Problem creating account.");
      }
    },
      error => {
        this.showPopup("Error", error);
      });
  }
 
  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.navCtrl.setRoot(SearchPage);
            }
          }
        }
      ]
    });
    alert.present();
  }

}
