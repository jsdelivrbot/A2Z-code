import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular7template';

  users: Array<any> = [];

  constructor(private http: Http) {

  }

  ngOnInit() {
    this.http.get('/users')
      .subscribe(
        (users: any) => {
          console.log(users)
          this.users = users.json();
        }
      )
  }

}
