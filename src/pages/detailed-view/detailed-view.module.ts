import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailedViewPage } from './detailed-view';

@NgModule({
  declarations: [
    DetailedViewPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailedViewPage),
  ],
})
export class DetailedViewPageModule {}
