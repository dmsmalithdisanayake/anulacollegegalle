import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';


@IonicPage({
  name: 'notices'
})
@Component({
  selector: 'page-notices',
  templateUrl: 'notices.html',
})
export class NoticesPage {

  noticeForm: FormGroup;
  designation: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {

    this.noticeForm = formBuilder.group({
      'heading': ['', Validators.required],
      'content': ['', Validators.required],
      'sendto': ['', Validators.required]
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticesPage');
  }

  onSubmit(loginData) {
     console.log("data***",this.noticeForm.value);

    // if (loginData.valid) {
    //   console.log(this.loginForm);
    //   let loader = this.loadingController.create({
    //     content: 'Logging...'
    //   });
    //   loader.present().then(() => {
    //     this.auth.login(loginData.value).subscribe((data) => {
    //       if (data.success === true) {
    //         loader.dismiss();
    //         this.navCtrl.setRoot('home');
    //       }
    //     },
    //       err => {
    //         loader.dismiss();
    //         loginData.password = "";
    //         let alert = this.alertCtrl.create({
    //           title: "Login Failed",
    //           buttons: ['Try again']
    //         })
    //         alert.present();
    //       })
    //   });
    // }
  }
}
