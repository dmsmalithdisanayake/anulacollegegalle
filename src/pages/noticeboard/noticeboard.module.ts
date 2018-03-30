import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticeboardPage } from './noticeboard';

@NgModule({
  declarations: [
    NoticeboardPage,
  ],
  imports: [
    IonicPageModule.forChild(NoticeboardPage),
  ],
})
export class NoticeboardPageModule {}
