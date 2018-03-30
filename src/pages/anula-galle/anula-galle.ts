import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { CreateaccountPage } from '../createaccount/createaccount';

@IonicPage({
  name: 'anula-galle'
}
)
@Component({
  selector: 'page-anula-galle',
  templateUrl: 'anula-galle.html',
})
export class AnulaGallePage {

  loginForm: FormGroup;
  designation: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private formBuilder: FormBuilder) {

    this.loginForm = formBuilder.group({
      'username': ['', Validators.required],
      'designation': ['', Validators.required],
      'password': ['', Validators.required]
    })


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnulaGallePage');
  }

  onSubmit(loginData) {
     console.log("data***",this.loginForm.value);

     if(this.loginForm.value.designation === "pricipal"){
        this.navCtrl.push('principlelogin');
     }else if(this.loginForm.value.designation === "academicstaff"){
        this.navCtrl.push('stafflogin');
     }else if(this.loginForm.value.designation === "parent"){
        this.navCtrl.push('parentlogin');
     }
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

  toCreateAccount(){
     console.log("toCreateAccount***");
     this.navCtrl.push('createaccount');
  }

}
