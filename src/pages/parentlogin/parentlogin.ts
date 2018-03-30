import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
  name: 'parentlogin'
})
@Component({
  selector: 'page-parentlogin',
  templateUrl: 'parentlogin.html',
})
export class ParentloginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParentloginPage');
  }

  tomakecomplains(){
    this.navCtrl.push('makecomplains');
  }

  tonoticeboard(){
    this.navCtrl.push('noticeboard');
  }

}
