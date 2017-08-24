import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HerokuDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HerokuDataProvider {

  constructor(public http: Http) {
    console.log('Hello HerokuDataProvider Provider');
  }
  getData(){
  	console.log(this.http.get("https://camp-search.herokuapp.com/"));
  }
}
