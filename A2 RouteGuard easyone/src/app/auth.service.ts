import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: Array<{}>;
  tocken: Number = 0;
  tockenDetails: String;

  constructor() {
    this.userData = [{
      emailId: 'gaurav@gmail.com', password: 'gaurav'
    }]
  }

  setTocken() {
    this.tocken = new Date().getTime();
    localStorage.setItem('tocken', JSON.stringify(this.tocken));
  }

  validateUserTocken() {
    this.tockenDetails = localStorage.getItem('tocken');
    //let _tocken = JSON.parse
    if (this.tockenDetails != null) {
      return true;
    } else {
      return false;
    }
  }

  //it should be from backend
  validateUserDetails(user) {
    let _userList = this.userData;
    for (var i = 0; i < _userList.length; i++) {
      if (user.emailId.toLowerCase() == _userList[i]['emailId'].toLowerCase() && user.password == _userList[i]['password']) {
        return true;
      }
    }
  }

  logout() {
    localStorage.clear();
  }
}
