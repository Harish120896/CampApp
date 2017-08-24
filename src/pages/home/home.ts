import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RegisterPage } from "../register/register";
import { HerokuDataProvider } from "../../providers/heroku-data/heroku-data";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  registerCredentials = { email: '', password: '' };

  constructor(public navCtrl: NavController,public herokuDataProvider: HerokuDataProvider) {

  }

  public createAccount() {
    this.herokuDataProvider.getData();
  }
 
  public login() {
    
  }

}
