import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeavemanagerPage } from './leavemanager';

@NgModule({
  declarations: [
    LeavemanagerPage,
  ],
  imports: [
    IonicPageModule.forChild(LeavemanagerPage),
  ],
})
export class LeavemanagerPageModule {}
