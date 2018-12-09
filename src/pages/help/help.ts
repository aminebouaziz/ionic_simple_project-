import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CameraOptions, Camera } from '@ionic-native/camera';
import { storage } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';


import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { PostPage } from '../post/post';


@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {
  email:string;
  @ViewChild('help') help;
  @ViewChild('message') message;
  @ViewChild('number') number;
  helps: AngularFireList<any>;
  image:any;
  constructor(private fire:AngularFireAuth,private Database: AngularFireDatabase, private camera:Camera,public navCtrl: NavController, public navParams: NavParams) {
   this.helps = this.Database.list('/help');
   
    this.email = fire.auth.currentUser.email;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }
  async takePhoto(){
    try{
     const options: CameraOptions={
       quality:50,
       targetHeight:600,
       targetWidth:600,
       destinationType:this.camera.DestinationType.DATA_URL,
       encodingType:this.camera.EncodingType.JPEG,
       mediaType: this.camera.MediaType.PICTURE
     }
     const result = await this.camera.getPicture(options);
    this.image=`data:image/jpeg;base64,${result}`;
     const pictures= storage().ref('pictures/'+this.email );
             pictures.putString(this.image,'data_url');
             console.log(pictures.putString(this.image,'data_url'));
     
   }
   catch (e){
     console.log(e);
   }
   }
   submit(){
    this.helps.push({
      help:this.help.value,
      message:this.message.value,
      number:this.number.value
    });
   
    this.navCtrl.push(PostPage);   
   }
  
}
