import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseServiceProvider } from "../../providers/firebase-service/firebase-service";
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  shoppingItems = [];
  newItem = '';

  constructor(private angFireAuth: AngularFireAuth,   private toast: ToastController, 
    public navCtrl: NavController, public firebaseService: FirebaseServiceProvider) {
      
      const personRef: firebase.database.Reference = firebase.database().ref(`/shoppingItems/`);
      personRef.on('value', personSnapshot => {
         console.log( personSnapshot.val());
         var b = Object.keys(personSnapshot.val());
         this.shoppingItems = [];
         for (let i = 0; i < Object.keys(personSnapshot.val()).length; i++) {
          this.shoppingItems.push({
            "key":Object.keys(personSnapshot.val())[i],
            "value":Object.values(personSnapshot.val())[i]
          }); 
         }
      });
  //https://javebratt.com/firebase-objects-ionic-2-app/
  //
  }

  addItem(){
    this.firebaseService.addItems(this.newItem);
  }

  removeItem(id){
    this.firebaseService.removeItem(id);
  }

  ionViewWillLoad(){
    this.angFireAuth.authState.subscribe(data => {
      console.log(data);
      if(data && data.email && data.uid){
        this.toast.create({
          message: `Welcome to APP_NAME', ${data.email}`,
          duration: 3000
        }).present();
      }
      else{
        this.toast.create({
          message: `Couldn't find authentication, ${data.email}`,
          duration: 3000
        }).present();
      }
    });
  }
}
