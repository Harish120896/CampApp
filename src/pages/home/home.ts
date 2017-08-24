import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RegisterPage } from "../register/register";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  registerCredentials = { email: '', password: '' };

  constructor(public navCtrl: NavController) {

  }

  public createAccount() {
  console.log("Working.......................");
    this.navCtrl.push(RegisterPage);
  }
 
  public login() {
    
  }

}
