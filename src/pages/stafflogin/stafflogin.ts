import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
  name: 'stafflogin'
})
@Component({
  selector: 'page-stafflogin',
  templateUrl: 'stafflogin.html',
})
export class StaffloginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffloginPage');
  }

  toleavemanager(){
    this.navCtrl.push('leavemanager');
  }

  tonoticeboard(){
    this.navCtrl.push('noticeboard');
  }

  toworkallocation(){
    this.navCtrl.push('teacherwork');
  }

  totimetable(){
    this.navCtrl.push('teacherwork');
  }
}
