import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'teacherwork'
})
@Component({
  selector: 'page-teacherwork',
  templateUrl: 'teacherwork.html',
})
export class TeacherworkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherworkPage');
  }

}
