import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'leavemanager'
})
@Component({
  selector: 'page-leavemanager',
  templateUrl: 'leavemanager.html',
})
export class LeavemanagerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeavemanagerPage');
  }

  toleaverequest(){
    this.navCtrl.push('leaverequest');
  }

  toleaveapprovalreject(){
    this.navCtrl.push('leaveapproval');
  }

  toleaveahistory(){
    this.navCtrl.push('leavehistory');
  }

  toleavepolicy(){
    this.navCtrl.push('leavepolicy');
  }
}
