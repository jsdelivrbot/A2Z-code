import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public model: loginModel;
  showLoginWarningMessage: boolean = false;
  returnUrl: string = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute) {
    this.model = new loginModel();
  }

  ngOnInit() {
    if (this.auth.validateUserTocken()) {
      //update your logic accordingly
      //this will trigger while user clicks on back button, 
      //before naviagting to login page
      alert('You will be logged out');
    }
    this.auth.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'dashboard';
  }

  login() {
    this.showLoginWarningMessage = false;
    if (this.auth.validateUserDetails(this.model)) {
      this.auth.setTocken();
      this.router.navigate([this.returnUrl]);
    } else {
      console.log('Invalid credentials');
      this.showLoginWarningMessage = true;
    }
  }
}

export class loginModel {
  emailId: string;
  password: string;
}