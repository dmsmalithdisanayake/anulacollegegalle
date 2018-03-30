import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'leavehistory'
}
)
@Component({
  selector: 'page-leavehistory',
  templateUrl: 'leavehistory.html',
})
export class LeavehistoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeavehistoryPage');
  }

}
