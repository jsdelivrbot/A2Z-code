import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../app/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor(private angFireAuth: AngularFireAuth, 
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async register(user: User){
    try {
      const result = await this.angFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      this.navCtrl.push(LoginPage);
      console.log(result);
    }
    catch(e) {
      console.error(e);
    }
    
  }

}
