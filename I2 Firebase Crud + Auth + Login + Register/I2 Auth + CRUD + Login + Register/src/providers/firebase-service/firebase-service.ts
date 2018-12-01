import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {

  constructor(public afd: AngularFireDatabase) {
    console.log('Hello FirebaseServiceProvider Provider');
  }

  getShoppingItems(){
    return this.afd.list('/shoppingItems/');
  }

  addItems(name){
     return this.afd.list('/shoppingItems/').push(name);
  }

  removeItem(id){
     return this.afd.list('/shoppingItems/').remove(id);
  }

}
