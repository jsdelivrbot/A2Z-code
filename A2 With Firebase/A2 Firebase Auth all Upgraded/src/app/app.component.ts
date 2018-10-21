import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth, database } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular7template';

  items: Observable<any[]>;

  private itemDoc: AngularFirestoreDocument<any>;
  item: Observable<any>;

  constructor(public afAuth: AngularFireAuth, public db: AngularFirestore, private afs: AngularFirestore) {
    this.itemDoc = afs.doc<any>('items/1');
    this.item = this.itemDoc.valueChanges();
  }

  ngOnInit(): void {

    this.items = this.db.collection('businesses').valueChanges();
    console.log(this.items);

    console.log(this.getCurrentUser());

  }

  update(item: any) {
    this.itemDoc.update(item);
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());


    // var provider = new auth.FacebookAuthProvider();
    // provider.addScope('user_birthday');
    // auth().signInWithPopup(provider).then(function (result: any) {
    //   console.log(result);
    //   var token = result.credential.accessToken;
    //   var user = result.user;
    // });

    // this.afAuth.auth.signInWithPopup(new auth.GithubAuthProvider());

    // auth().signInWithEmailAndPassword("shree@gmail.com", "shree*123").catch(function (error) {

    //   console.log(error);
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // ...
    // });

    auth().onAuthStateChanged(function (user) {
      console.log(user);
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
      } else {
        // User is signed out.
        // ...
      }
    });

  }

  createUser() {
    auth().createUserWithEmailAndPassword("shree@gmail.com", "shree*123").catch(function (error) {
      console.log(error);
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }

  logout() {
    this.getCurrentUser();
    this.afAuth.auth.signOut();
  }

  getCurrentUser() {

    var user = auth().currentUser;

    user.sendEmailVerification().then(function () {
      // Email sent.
    }).catch(function (error) {
      // An error happened.
    });

    if (user != null) {
      user.providerData.forEach(function (profile) {
        console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
        console.log("  Photo URL: " + profile.photoURL);
      });
    }
    return auth().currentUser;
  }

}
