import { Component, OnInit,ViewChild } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild(ChildComponent) public chiildHandler:ChildComponent;
  lastDate:Date;

  constructor() { }
  
  ngOnInit() {
    
  }

  start() {
    this.chiildHandler.start();
  }

  stop() {
    this.chiildHandler.stop();
  }
}
