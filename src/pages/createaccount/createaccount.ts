import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@IonicPage({
  name: 'createaccount'
}
)
@Component({
  selector: 'page-createaccount',
  templateUrl: 'createaccount.html',
})
export class CreateaccountPage {

  signupForm: FormGroup;
  designation: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private formBuilder: FormBuilder) {

    this.signupForm = formBuilder.group({
      'fullname': ['', Validators.required],
      'username': ['', Validators.required],
      'email': ['', Validators.required],
      'designation': ['', Validators.required],
      'password': ['', Validators.required]
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateaccountPage');
  }

  onSubmit(loginData) {
     console.log("data***",this.signupForm.value);
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
