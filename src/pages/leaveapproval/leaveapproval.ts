import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'leaveapproval'
}
)
@Component({
  selector: 'page-leaveapproval',
  templateUrl: 'leaveapproval.html',
})
export class LeaveapprovalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaveapprovalPage');
  }

}
