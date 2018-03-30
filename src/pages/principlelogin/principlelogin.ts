import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
  name: 'principlelogin'
})
@Component({
  selector: 'page-principlelogin',
  templateUrl: 'principlelogin.html',
})
export class PrincipleloginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipleloginPage');
  }

  toleavemanager(){
    this.navCtrl.push('leavemanager');
  }

  tonotices(){
    this.navCtrl.push('notices');
  }

  toworkallocation(){
    this.navCtrl.push('teacherwork');
  }

  toreceivedcomplains(){
    this.navCtrl.push('complainswall');
  }
}
