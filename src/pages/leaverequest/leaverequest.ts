import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@IonicPage({
  name: 'leaverequest'
})
@Component({
  selector: 'page-leaverequest',
  templateUrl: 'leaverequest.html',
})
export class LeaverequestPage {

  leaveForm: FormGroup;
  reason: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private formBuilder: FormBuilder) {
  
    this.leaveForm = formBuilder.group({
      'fromdate': ['', Validators.required],
      'todate': ['', Validators.required],
      'reason': ['', Validators.required]
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaverequestPage');
  }

}
