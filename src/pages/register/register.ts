import { HomePage } from './../home/home';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(private fire:AngularFireAuth ,public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }
  @ViewChild('username') uname;
  @ViewChild('email') email;
  @ViewChild('password') pswd;
  
  alert(message:string){
    this.alertCtrl.create({
      title:'info!',
      subTitle:message,
      buttons:['OK']
    }).present();
  }
 
  register(){
    this.fire.auth.createUserWithEmailAndPassword(this.email.value,this.pswd.value)
    .then(data=>{
      console.log("got data ", data);
      this.alert('Success ! You\'re Registred ');
      this.navCtrl.setRoot(HomePage);
      
    
    })

    .catch(error =>{
      console.log("got an error",error);
      this.alert(error.message);
      
    })
    console.log(this.email.value,this.uname.value,this.pswd.value);
   
  }

}
