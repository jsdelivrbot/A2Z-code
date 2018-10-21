import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

var config = {
  apiKey: "AIzaSyC_ae_4BHUnutpGbEJ9wWI8HVD-Td0jFj0",
  authDomain: "a2withfirebase.firebaseapp.com",
  databaseURL: "https://a2withfirebase.firebaseio.com",
  projectId: "a2withfirebase",
  storageBucket: "a2withfirebase.appspot.com",
  messagingSenderId: "891625492141"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // AngularFireModule.initializeApp(environment.firebase, 'a2withfirebase'),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
