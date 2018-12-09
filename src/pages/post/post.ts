import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';



import { AngularFireDatabase, AngularFireList, } from '@angular/fire/database';
import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  items ;
  imageSource;
  email;
 
  constructor(private fire:AngularFireAuth,private Database: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
  this.subscribeData();
  console.log(this.items);
  this.email = fire.auth.currentUser.email;
  this.getImageURL();
  }

subscribeData(){
  this.Database.list('/help').valueChanges().subscribe((datas)=>{
    console.log(datas)
    this.items=datas},
    
    (err)=>{

    console.log(err);
});

}
getImageURL(){
  firebase.storage().ref().child('pictures/'+this.email).getDownloadURL()
  .then((url)=>{
    this.imageSource=url; 
  })

}

}
