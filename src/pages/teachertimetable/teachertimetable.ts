import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'teachertimetable'
})
@Component({
  selector: 'page-teachertimetable',
  templateUrl: 'teachertimetable.html',
})
export class TeachertimetablePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeachertimetablePage');
  }

}
