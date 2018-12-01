import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { User } from '../../app/user';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  user = {} as User;

  constructor(private angFireAuth:AngularFireAuth, 
    public navCtrl: NavController, public navParams: NavParams) {}

 login(user: User){
   try{
    const result = this.angFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    if(result){
      this.navCtrl.setRoot(HomePage);
    }
   }
   catch(e){
     console.error(e);
   }
 }

 register(){
  this.navCtrl.push(RegisterPage);
 }

}
