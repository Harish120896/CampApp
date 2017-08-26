import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { MapPage } from "../map/map";

@Component({
  selector: 'page-camp-list',
  templateUrl: 'camp-list.html',
})
export class CampListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modCtrl: ModalController) {
  }
  items = ["HOSUR","VELLORE","PANDI","OOTY"];
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CampListPage');
  }
    public itemSelected(val:String){
      this.modCtrl.create(MapPage, {val:val}).present();
  }

}
