import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';


@IonicPage({
  name: 'makecomplains'
})
@Component({
  selector: 'page-makecomplains',
  templateUrl: 'makecomplains.html',
})
export class MakecomplainsPage {

    complainForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private formBuilder: FormBuilder) {

    this.complainForm = formBuilder.group({
      'title': ['', Validators.required],
      'complain': ['', Validators.required]
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MakecomplainsPage');
  }

  onSubmit(loginData) {
     console.log("data***",this.complainForm.value);

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
