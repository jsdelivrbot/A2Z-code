import {Component, OnInit} from '@angular/core';
import * as html2canvas from "html2canvas";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  format = 'video/webm';
  constrains = {video: true, audio: false};

  constructor() {}

  ngOnInit() {}

  public handleVideoStream(blob) {
    // can send it to a server or play in another video player etc..
    debugger;
    console.log('do something with the recording' + blob);
  }

  takeSnap() {
    console.log("taking snap");
    html2canvas(document.body).then(function (canvas) {
      var imgData = canvas.toDataURL("image/png");
      document.body.appendChild(canvas);
  });
  }

  announceStart() {
   
  }
}
