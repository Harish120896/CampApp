import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CampListPage } from './camp-list';

@NgModule({
  declarations: [
    CampListPage,
  ],
  imports: [
    IonicPageModule.forChild(CampListPage),
  ],
})
export class CampListPageModule {
  
}
