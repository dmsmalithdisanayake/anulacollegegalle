import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaffloginPage } from './stafflogin';

@NgModule({
  declarations: [
    StaffloginPage,
  ],
  imports: [
    IonicPageModule.forChild(StaffloginPage),
  ],
})
export class StaffloginPageModule {}
