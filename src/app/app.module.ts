import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from "../pages/register/register";
import { HerokuDataProvider } from '../providers/heroku-data/heroku-data';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { MainPage } from "../pages/main/main";
import { DetailedViewPage } from "../pages/detailed-view/detailed-view";
import { MapPage } from "../pages/map/map";
import { SearchPage } from "../pages/search/search";
import { CampListPage } from "../pages/camp-list/camp-list";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    MainPage,
    DetailedViewPage,
    MapPage,
    SearchPage,
    CampListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    MainPage,
    DetailedViewPage,
    MapPage,
    SearchPage,
    CampListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HerokuDataProvider,
    AuthServiceProvider,
    Geolocation,
    NativeGeocoder

  ]
})
export class AppModule {}
