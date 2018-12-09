import { InfoPage } from './../pages/info/info';
import { HelpPage } from './../pages/help/help';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { RegisterPage } from '../pages/register/register';
import { LoggedInPage } from './../pages/logged-in/logged-in';
import { PostPage } from '../pages/post/post';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {Camera} from '@ionic-native/camera';


import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';


 const firebaseAuth ={
  apiKey: "AIzaSyAfV8h13AmDyGyEvqch81-PwlNhhkuKvxA",
  authDomain: "supermodular2-e82f6.firebaseapp.com",
  databaseURL: "https://supermodular2-e82f6.firebaseio.com",
  projectId: "supermodular2-e82f6",
  storageBucket: "supermodular2-e82f6.appspot.com",
  messagingSenderId: "137434357285"
};



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LoggedInPage,
    HelpPage,
    InfoPage,
    PostPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LoggedInPage,
    HelpPage,
    InfoPage,
    PostPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera ,
    AngularFireDatabase
  ]
})
export class AppModule {}
