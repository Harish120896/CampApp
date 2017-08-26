import { Component } from '@angular/core';
import { ViewController, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  location: any;
  destination:String;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public geolocation: Geolocation, public nativeGeocoder: NativeGeocoder,
  public viewController: ViewController) {
    this.destination = this.navParams.get('val');  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }
  ionViewDidEnter(){
    this.calculateAndDisplayRoute();
  //  this.geolocation.getCurrentPosition().then((data)=>this.getCountry(data))
  //  .catch((error)=>alert(error));
  
  }
  public getCountry(pos){
    this.nativeGeocoder.reverseGeocode(pos.coords.latitude,pos.coords.longitude)
    .then((res:NativeGeocoderReverseResult)=>{alert(res.countryName)
    })
    .catch((error:any)=>alert(error));   
  }
  public calculateAndDisplayRoute() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: {lat: 41.85, lng: -87.65}
    });
    directionsDisplay.setMap(map);
    directionsService.route({
      origin: this.destination+"",
      destination: "chennai",
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
  public Dismiss(){
    this.viewController.dismiss();
  }
  

}
