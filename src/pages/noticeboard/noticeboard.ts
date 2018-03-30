import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'noticeboard'
})
@Component({
  selector: 'page-noticeboard',
  templateUrl: 'noticeboard.html',
})
export class NoticeboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticeboardPage');
  }

}
