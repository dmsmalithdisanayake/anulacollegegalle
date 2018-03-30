import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'complainswall'
})
@Component({
  selector: 'page-complainswall',
  templateUrl: 'complainswall.html',
})
export class ComplainswallPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComplainswallPage');
  }

}
