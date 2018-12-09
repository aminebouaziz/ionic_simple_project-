import { LoggedInPage } from './../logged-in/logged-in';
import { Component,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('username') uname;
  @ViewChild('password') psw;
  constructor(public alertCtrl: AlertController,private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  alert(message:string){
    this.alertCtrl.create({
      title:'info!',
      subTitle:message,
      buttons:['OK']
    }).present();
  }
  signInUser(){
    this.fire.auth.signInWithEmailAndPassword(this.uname.value,this.psw.value)
    .then(data=>{
      console.log("got some data", this.fire.auth.currentUser);
      this.alert('Success ! You\'re logged in');
      this.navCtrl.setRoot(LoggedInPage);
    })
    .catch(error=>{
      console.log("got an error",error);
      this.alert(error.message);
      
    })
    
  }
}
