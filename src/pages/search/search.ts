import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RegisterPage } from "../register/register";
import { MapPage } from "../map/map";

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  public search(){
    this.navCtrl.push(MapPage);
  }
  public register(){
    this.navCtrl.push(RegisterPage);
  }
}
