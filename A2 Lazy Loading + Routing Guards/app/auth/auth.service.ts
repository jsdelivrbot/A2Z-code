import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

  get isLoggedIn() {
    return false; //if false --> visit http://localhost:4200/account, we'll be redirected to the home page!
  }

  get isSuperAdmin() {
    return false;
  }

}
