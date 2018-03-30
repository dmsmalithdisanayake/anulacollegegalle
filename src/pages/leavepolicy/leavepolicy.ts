import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'leavepolicy'
}
)
@Component({
  selector: 'page-leavepolicy',
  templateUrl: 'leavepolicy.html',
})
export class LeavepolicyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeavepolicyPage');
  }

}
